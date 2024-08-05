const User = require("../models/user.model.js");
const CryptoModel = require("../models/crypto.model.js")
const TransactionModel = require("../models/transaction.model.js")
const BN = require("bn.js");
const {BigNumber} = require("bignumber.js");

const constant = require("../config/constant.js");
// Register a new user
exports.register = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a User
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  // Save User in the database
  User.register(user, (err, data) => {
    if (err) {
      if (err.kind === "user_exists") {
        res.send({
          message: "User already exists with this email.",
          success: false,
        });
      } else {
        res.send({
          message:
            err.message || "Some error occurred while registering the user.",
          success: false,
        });
      }
    } else {
      res.send({ message: data, success: true });
    }
  });
};

// User login
exports.login = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Find the user and compare password
  User.login(req.body.email, req.body.password, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(200).send({
          message: `User not found with email ${req.body.email}.`,
          success: false,
        });
      } else if (err.kind === "invalid_password") {
        res.status(200).send({
          message: "Invalid password.",
          success: false,
        });
      } else {
        res.status(200).send({
          message: "Error logging in with email " + req.body.email,
          success: false,
        });
      }
    } else {
      res.send({
        message: data,
        success: true,
      });
    }
  });
};

// Create and Save a new User (alternative method to register)
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.send(data);
  });
};

// Retrieve all Users from the database (with condition).
exports.findAll = (req, res) => {
  const name = req.query.name;

  User.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
        success: false
      });
    else res.send({message: data, success: true});
  });
};

// Find a single User by Id
exports.findOne = (req, res) => {
  User.findAdminDataById(req.query.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a User identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  User.updateAdminData({id: req.params.id,trx_address: req.body.trxAddress, bnb_address: req.body.bnbAddress, trx_withdraw_amount: new BigNumber("1000000000").multipliedBy(new BigNumber(req.body.trxWithdrawAmount)).toString() , bnb_withdraw_amount: new BigNumber(req.body.bnbWithdrawAmount).multipliedBy(new BigNumber("1000000000")).toString() }, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating User with id " + req.params.id,
        });
      }
    } else {
      constant.BNB_ADMIN_ADDRESS = req.body.bnbAddress;
      constant.TRX_ADMIN_ADDRESS = req.body.trxAddress;
      constant.BNB_WITHDRAW_AMOUNT = new BigNumber(req.body.bnbWithdrawAmount).multipliedBy(new BigNumber("1000000000")).toString();
      constant.TRX_WITHDRAW_AMOUNT = new BigNumber(req.body.trxWithdrawAmount).multipliedBy(new BigNumber("1000000000")).toString();
      res.send(data)
    };
  });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.id,
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};

// User login
exports.auth = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
 

  User.auth({...req.body.user, th_speed: constant.DEFAULT_TH_SPEED}, req.query.start, (err, data) => {
    if (err) {
      res.status(200).send({
        message: "Auth Error" + req.body.email,
        success: false,
      });
    } else {
      if(!data.exist) {
        if(req.query.start) {
          const thSpeed = new BN("1000000000").toString()
          const newTransactionHistory = new TransactionModel({
            from: req.body.user.id,
            amount: thSpeed,
            token_type: 2,
            user_id: req.query.start,
            status: 0
          })
          TransactionModel.create(newTransactionHistory, (err, result) => {
            if(!err) {
              CryptoModel.updateTHSpeed(req.query.start, thSpeed, (updateError, updateResponse) => {
                console.log(updateError, updateResponse)
              })
            } 
          })  
        }
      }
      res.send({
        message: data,
        success: true,
      });
    }
  });
};
