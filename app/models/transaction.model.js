const pool = require("./db.js");
// constructor
const TransactionHistory = function(transactionHistory) {
  this.from = transactionHistory.from,
  this.to = transactionHistory.to,
  this.amount = transactionHistory.amount,
  this.token_type = transactionHistory.token_type, // 0: trx, 1: bnb, 2: th
  this.user_id = transactionHistory.user_id,
  this.status = transactionHistory.status // 0: deposit 1: withdraw 
  this.txID = transactionHistory.txID
}
TransactionHistory.create = async (newTransactionHistory, result) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const query = `INSERT INTO tbl_transaction_history SET ?`;

    const [res] = await connection.query(query, newTransactionHistory);
    result(null, res);
  } catch (err) {
    result(err, null);
  } finally {
    if (connection) connection.release();
  }
};


module.exports = TransactionHistory;