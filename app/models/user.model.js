const pool = require("./db.js");
const bcrypt = require("bcrypt");
const BN = require("bn.js");

// Constructor
const User = function (user) {
  this.telegram_id = user.id;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.username = user.username;
  this.allows_write_to_pm = user.allows_write_to_pm;
  this.referral_id = user.referral_id;
  this.th_speed = user.th_speed;
};

User.register = async (newUser, result) => {
  let connection;
  try {
    connection = await pool.getConnection();

    // Check if the user already exists
    const [existingUser] = await connection.query("SELECT * FROM tbl_admin WHERE email = ?", [newUser.email]);

    if (existingUser.length) {
      // User already exists
      result({ kind: "user_exists" }, null);
      return;
    }

    // Hash the password before saving
    const hash = await bcrypt.hash(newUser.password, 10);
    newUser.password = hash;

    // Save the new user
    const [insertRes] = await connection.query("INSERT INTO tbl_admin SET ?", newUser);

    console.log("created user: ", { id: insertRes.insertId, ...newUser });
    result(null, { id: insertRes.insertId, ...newUser });

  } catch (err) {
    console.log("error: ", err);
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};


// Login method
User.login = async (email, password, result) => {
  let connection;

  try {
    connection = await pool.getConnection();

    // Find the user by email
    const [res] = await connection.query("SELECT * FROM tbl_admin WHERE email = ?", [email]);

    if (res.length) {
      const user = res[0];

      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        console.log("login successful: ", user);
        result(null, user);
      } else {
        // Passwords don't match
        result({ kind: "invalid_password" }, null);
      }
    } else {
      // User not found
      result({ kind: "not_found" }, null);
    }
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};




// Login method
User.auth = async (user, referral_id, result) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const loginQuery = `SELECT
                          *,
                          ( SELECT COUNT( * ) FROM tbl_user WHERE referral_id = 6858672674 ) AS referral_counts 
                        FROM
                          tbl_user u
                        WHERE
                          telegram_id = ?
                        `;
    const [res] = await connection.query(loginQuery, [user.id]);

    if (res.length) {
      result(null, {...res[0], exist: true});
    } else {
      console.log(user)
      const newUser = new User({ ...user, referral_id });
      console.log(newUser)
      const insertQuery = "INSERT INTO tbl_user SET ?";
      const [insertRes] = await connection.query(insertQuery, newUser);

      const getUserQuery = "SELECT * FROM tbl_user WHERE id = ?";
      const [newUserRes] = await connection.query(loginQuery, [insertRes.insertId]);
      result(null, {...newUserRes[0], exist: false});
    }
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

// Find user by ID
User.findById = async (id, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = "SELECT * FROM tbl_user WHERE id = ?";
    const [res] = await connection.query(query, [id]);

    if (res.length) {
      result(null, res[0]);
    } else {
      result({ kind: "not_found" }, null);
    }
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

// Get all users
User.getAll = async (name, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    let query = `
          SELECT 
              u.first_name, 
              u.last_name, 
              u.username,
              u.th_speed,
              (SELECT COUNT(*) FROM tbl_user WHERE referral_id = u.telegram_id) AS referral_counts,
              COALESCE(SUM(CASE WHEN th.token_type = 0 THEN th.amount END), 0) AS trx_deposit_amount,
              COALESCE(SUM(CASE WHEN th.token_type = 1 THEN th.amount END), 0) AS bnb_deposit_amount
          FROM 
              tbl_user u
          LEFT JOIN 
              tbl_transaction_history th ON u.telegram_id = th.user_id
          GROUP BY 
              u.id, u.first_name, u.last_name, u.username, u.th_speed
      `;

    if (name) {
      query += " WHERE name LIKE ?";
      name = `%${name}%`;
    }

    const [res] = await connection.query(query, [name]);
    result(null, res);
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

// Update user by ID
User.updateById = async (id, user, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = "UPDATE tbl_user SET name = ?, email = ? WHERE id = ?";
    const [res] = await connection.query(query, [user.name, user.email, id]);

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
    } else {
      result(null, { id: id, ...user });
    }
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

// Remove user by ID
User.remove = async (id, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = "DELETE FROM tbl_user WHERE id = ?";
    const [res] = await connection.query(query, [id]);

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
    } else {
      result(null, res);
    }
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

// Remove all users
User.removeAll = async (result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = "DELETE FROM tbl_user";
    const [res] = await connection.query(query);

    result(null, res);
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

User.getTotalReferral = async (telegram_id) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const query = `select count(*) as total_referral from tbl_user where referral_id = ?`;
    const [res] = await connection.query(query, [telegram_id]);
    return {result: res[0], error: null}    
  } catch (error) {
    return {result: null, error}
  }

}

User.updateTrxById = async (userTelegramId, approvedTrx) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const getQuery = `SELECT trx FROM tbl_user WHERE telegram_id = ?`;
    const [res] = await connection.query(getQuery, [userTelegramId]);
    console.log("---------------------",res.length)
    if (res.length > 0) {
      const query = `UPDATE tbl_user SET trx = ? WHERE telegram_id = ?`;
      const updatedTrx = new BN(res[0].trx).sub(new BN(approvedTrx)).toString();
      console.log("---------------------",updatedTrx)
      const [updateRes] = await connection.query(query, [
        updatedTrx,
        userTelegramId,
      ]);
      return {error: null, res: updateRes};
    } else {
      return {error: new Error("User not found"), res: null};
    }
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};

User.updateBnbById = async (userTelegramId, approvedBnb) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const getQuery = `SELECT bnb FROM tbl_user WHERE telegram_id = ?`;
    const [res] = await connection.query(getQuery, [userTelegramId]);

    if (res.length > 0) {
      const query = `UPDATE tbl_user SET bnb = ? WHERE telegram_id = ?`;
      const updatedBnb = new BN(res[0].bnb).sub(new BN(approvedBnb)).toString();
      const [updateRes] = await connection.query(query, [
        updatedBnb,
        userTelegramId,
      ]);
      return {error: null, res: updateRes};
    } else {
      return {error: new Error("User not found"), res: null};
    }
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};

User.updateAdminData = async (data, result) => {
  let connection;

  try {
    connection = await pool.getConnection();

      const query = `UPDATE tbl_admin SET trx_address = ?, bnb_address = ?, trx_withdraw_amount = ?, bnb_withdraw_amount = ? WHERE id = ?`;
      const [updateRes] = await connection.query(query, [
        data.trx_address, data.bnb_address, data.trx_withdraw_amount, data.bnb_withdraw_amount,  data.id
      ]);
      result(null, updateRes);
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

// Find user by ID
User.findAdminDataById = async (id, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = "SELECT * FROM tbl_admin WHERE id = ?";
    const [res] = await connection.query(query, [id]);

    if (res.length) {
      result(null, res[0]);
    } else {
      result({ kind: "not_found" }, null);
    }
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = User;
