const pool = require("./db.js");
const BN = require("bn.js");

// Constructor
const Crypto = function (crypto) {
  this.user_id = crypto.user_id;
  this.address = crypto.address;
  this.is_bnb = crypto.is_bnb;
  this.public_key = crypto.public_key;
  this.private_key = crypto.private_key;
  this.is_active = crypto.is_active;
};

Crypto.getTrx = async (telegram_id, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `SELECT
                    u.th_speed,
                    u.trx,
                    u.updated_at,
                    (SELECT COUNT(*) FROM tbl_user WHERE referral_id = ?) AS referral_count
                  FROM
                    tbl_user u
                  WHERE
                    u.telegram_id = ?`;
    const [res] = await connection.query(query, [telegram_id, telegram_id]);
    result(null, res);
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

Crypto.getBnb = async (telegram_id, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `SELECT
                    u.th_speed,
                    u.bnb,
                    u.updated_at,
                    (SELECT COUNT(*) FROM tbl_user WHERE referral_id = ?) AS referral_count
                  FROM
                    tbl_user u
                  WHERE
                    u.telegram_id = ?`;
    const [res] = await connection.query(query, [telegram_id, telegram_id]);
    result(null, res);
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

Crypto.createTrx = async (newTrxWallet, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `INSERT INTO tbl_wallet SET ?`;
    const [res] = await connection.query(query, newTrxWallet);
    result(null, res);
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

Crypto.updateTHSpeed = async (userTelegramId, newTh, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const getQuery = `SELECT th_speed FROM tbl_user WHERE telegram_id = ?`;
    const [res] = await connection.query(getQuery, [userTelegramId]);

    if (res.length > 0) {
      const query = `UPDATE tbl_user SET th_speed = ? WHERE telegram_id = ?`;
      const updatedSpeed = new BN(newTh)
        .add(new BN(res[0].th_speed))
        .toString();
      const [updateRes] = await connection.query(query, [
        updatedSpeed,
        userTelegramId,
      ]);
      result(null, updateRes);
    } else {
      result(new Error("User not found"), null);
    }
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

Crypto.saveNewWithdraw = async (newWithdraw, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `
      INSERT INTO tbl_withdraw (telegram_id, is_bnb, amount, address)
      SELECT ?, ?, ?, ?/* other fields */
      WHERE NOT EXISTS (
        SELECT 1 FROM tbl_withdraw WHERE telegram_id = ? AND is_bnb = ? AND is_approved = 0
      );
    `;

    const [res] = await connection.query(query, [
      newWithdraw.telegram_id,
      newWithdraw.is_bnb,
      newWithdraw.amount,
      newWithdraw.address,
      newWithdraw.telegram_id,
      newWithdraw.is_bnb,
    ]);

    await connection.commit();

    if (res.affectedRows > 0) {
      result(null, res);
    } else {
      result('Already requested, please wait', null);
    }
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};

Crypto.getTransaction = async (userTelegramId) => {
  try {
    connection = await pool.getConnection();
    const query = `SELECT 
                  *
                  FROM 
                    tbl_transaction_history
                  WHERE 
                    token_type IN (0, 1) 
                    AND user_id = ?
                  ORDER BY 
                    created_at DESC;
                  `;

    const [res] = await connection.query(query, userTelegramId);
    return {error: null, res};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};

Crypto.updateWithdrawApprove = async (withdrawId, txID) => {
  try {
    connection = await pool.getConnection();
    const query = `UPDATE tbl_withdraw SET is_approved = 1, txID = ? WHERE id = ?`;
    const [res] = await connection.query(query, [txID, withdrawId]);    return {error: null, res};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
}

Crypto.getWithdrawList = async (userTelegramId) => {
  try {
    connection = await pool.getConnection();
    const query = `SELECT 
                      u.username,
                      SUM(CASE WHEN th.token_type = 0 AND th.status = 0 THEN th.amount ELSE 0 END) AS trx_deposit,
                      SUM(CASE WHEN th.token_type = 1 AND th.status = 0 THEN th.amount ELSE 0 END) AS bnb_deposit,
                      w.amount AS withdraw_amount,
                      w.created_at,
                      w.is_bnb,
                      w.address,
                      w.id,
                      w.is_approved,
                      w.telegram_id,
                      w.txID
                  FROM
                      tbl_withdraw w
                  LEFT JOIN 
                      tbl_user u ON w.telegram_id = u.telegram_id
                  LEFT JOIN 
                      tbl_transaction_history th ON w.telegram_id = th.user_id
                  GROUP BY 
                      u.username, w.amount, w.created_at, w.is_bnb, w.address, w.id, w.is_approved, w.telegram_id;
                  `;

    const [res] = await connection.query(query, userTelegramId);
    console.log(res)
    return {error: null, res};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};

Crypto.getWallet = async (userTelegramId) => {
  try {
    connection = await pool.getConnection();
    const query = `SELECT * from tbl_wallet ORDER BY created_at DESC;`;

    const [res] = await connection.query(query);
    console.log(res)
    return {error: null, res};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};
Crypto.getDepositHistory = async () => {
  try {
    connection = await pool.getConnection();
    const query = `SELECT
                        tbl_transaction_history.*, 
                        tbl_user.username
                    FROM
                        tbl_transaction_history
                    LEFT JOIN 
                        tbl_user ON tbl_user.telegram_id = tbl_transaction_history.user_id
                    WHERE
                        tbl_transaction_history.token_type IN (1, 0)
                    ORDER BY
                        tbl_transaction_history.created_at DESC;
                  `;

    const [res] = await connection.query(query);
    console.log(res)
    return {error: null, res};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
}
module.exports = Crypto;
