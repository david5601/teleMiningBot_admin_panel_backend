const pool = require("./db.js");
const BN = require("bn.js");

// Constructor
const Task = function (task) {
  this.name = task.name;
  this.bonus = task.bonus;
  this.image_url = task.image_url;
};

Task.create = async (newTask) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `INSERT INTO tbl_task SET ?`;

    const [res] = await connection.query(query, newTask);
    return {error: null, result: res};
  } catch (err) {
    return {error, result: null};
  } finally {
    if (connection) connection.release();
  }
};

Task.createStatus = async (taskStatus) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `INSERT INTO tbl_task_status SET ?`;

    const [res] = await connection.query(query, taskStatus);
    const [getRes] = await connection.query(`SELECT t.* FROM tbl_task_status ts JOIN tbl_task t ON ts.task_id = t.id WHERE ts.id = ?`, [res.insertId]);
    return {error: null, getRes};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};

Task.getTaskByTelegramId = async (telegramId) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `SELECT 
                    t.id AS task_id,
                    t.name AS task_name,
                    t.bonus,
                    t.image_url,
                    t.link,
                    t.type,
                    t.created_at AS task_created_at,
                    t.updated_at AS task_updated_at,
                    ts.telegram_user_id,
                    ts.status AS task_completed_status
                  FROM 
                    tbl_task t
                  LEFT JOIN 
                    tbl_task_status ts 
                  ON 
                    t.id = ts.task_id 
                  AND 
                    ts.telegram_user_id = ?
                  ORDER BY 
                    t.id;`;

    const [res] = await connection.query(query, telegramId);
    return {error: null, res};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};


Task.getTasks = async () => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `SELECT 
                    *
                  FROM 
                    tbl_task
                  `;
    const [res] = await connection.query(query);
    return {error: null, res};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};

Task.delete = async (id) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `delete from tbl_task where id = ?`;
    const [res] = await connection.query(query, id);
    return {error: null, res};
  } catch (err) {
    return {error: err, res: null};
  } finally {
    if (connection) connection.release();
  }
};
module.exports = Task;
