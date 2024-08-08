const CryptoModel = require("../models/crypto.model.js");
const TransactionModel = require("../models/transaction.model.js");
const Constant = require("../config/constant.js");
const BN = require("bn.js");
const constant = require("../config/constant.js");

const TronWeb = require("tronweb");
const { ethers } = require("ethers");

const axios = require("axios");
const User = require("../models/user.model.js");
const tronWeb = new TronWeb({
  fullHost: process.env.TRON_NET_ENDPOINT,
  headers: { "TRON-PRO-API-KEY": process.env.TRON_PRO_API_KEY },
  privateKey: process.env.TRON_PRIVATE_KEY,
});
//get trx caller id
exports.getTrx = async (req, res) => {

  CryptoModel.getTrx(req.params.id, (err, result) => {
    console.log(err, result)
    if (err) {
      res.send({
        message: `error occured with ${err}`,
        success: false,
      });
    } else {
      const thSpeed = new BN(result[0].th_speed);
      const trxAmount = calculateAmountFromTHSpeed(
        thSpeed,
        result[0].trx,
        result[0].updated_at,
        constant.RATIO_TRX_2_TH
      );
      res.send({
        message: { balance: trxAmount, thSpeed: thSpeed.toString(), ratio: constant.RATIO_TRX_2_TH },
        success: true,
      });
    }
  });
};

//get trx caller id
exports.getBnb = async (req, res) => {
  CryptoModel.getBnb(req.params.id, (err, result) => {
    if (err) {
      res.send({
        message: `error occured with ${err}`,
        success: false,
      });
    } else {
      // const thSpeed = calculateRealTHSpeed(
      //   result[0].th_speed,
      //   result[0].referral_count
      // );
      const thSpeed = new BN(result[0].th_speed);
      const bnbAmount = calculateAmountFromTHSpeed(
        thSpeed,
        result[0].bnb,
        result[0].updated_at,
        constant.RATIO_BNB_2_TH
      );
      res.send({
        message: { balance: bnbAmount, thSpeed: thSpeed.toString(), ratio: constant.RATIO_BNB_2_TH },
        success: true,
      });
    }
  });
};

exports.generateTrx = async (req, res) => {
  try {
    // Generate a new account
    const newAccount = await tronWeb.createAccount();

    const newWallet = new CryptoModel({
      address: newAccount.address.base58,
      user_id: req.params.id,
      is_bnb: false,
      public_key: newAccount.publicKey,
      private_key: newAccount.privateKey,
      is_active: 1,
    });

    CryptoModel.createTrx(newWallet, (err, result) => {
      if (err) {
        res.send({
          message: err,
          success: false,
        });
      } else {
        //implement indexer to get balance
        observerTrxAddress(newWallet.address, req.params.id, newWallet.private_key);
        res.send({
          message: { address: newWallet.address },
          success: true,
        });
      }
    });
  } catch (error) {
    console.error("Error creating account:", error);
  }
};

exports.generateBnb = async (req, res) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(process.env.BSC_NET_ENDPOINT);
    // Generate a new BSC account using ethers.js
    const wallet = ethers.Wallet.createRandom();
    const connectedWallet = wallet.connect(provider);

    const newWallet = new CryptoModel({
      address: connectedWallet.address,
      user_id: req.params.id,
      is_bnb: true,
      public_key: connectedWallet.publicKey,
      private_key: connectedWallet.privateKey,
      is_active: 1,
    });

    CryptoModel.createTrx(newWallet, (err, result) => {
      if (err) {
        res.send({
          message: err,
          success: false,
        });
      } else {
        // Implement indexer to get balance
        observerBnbAddress(newWallet.address, req.params.id, provider, newWallet.private_key);
        res.send({
          message: { address: newWallet.address },
          success: true,
        });
      }
    });
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).send({
      message: "Error creating account",
      success: false,
    });
  }
};
exports.getBalance = async (req, res) => {
  try {
    const balance = await getTrxBalance(req.params.address);
    res.send({
      balance,
      success: true,
    });
  } catch (error) {
    res.send({
      message: `Error fetching balance: ${error.message}`,
      success: false,
    });
  }
};

exports.sendTrx = async (req, res) => {
  try {
    const { fromPrivateKey, toAddress, amount } = this.generateTrx();
    const result = await sendTrx(fromPrivateKey, toAddress, amount);
    res.send({
      result,
      success: true,
    });
  } catch (error) {
    res.send({
      message: `Error sending TRX: ${error.message}`,
      success: false,
    });
  }
};

/**
 *
 * @param {id, amount, address, is_bnb} req
 * @param {success, message} res
 */
exports.withdraw = (req, res) => {
  
  if (new BN(req.body.is_bnb ? constant.BNB_WITHDRAW_AMOUNT : constant.TRX_WITHDRAW_AMOUNT).gt(new BN(req.body.amount))) {
    res.send({
      message: "insufficient amount",
      success: false,
    });
    return;
  } else {
    CryptoModel.saveNewWithdraw(
      {
        telegram_id: req.body.id,
        amount: req.body.amount,
        address: req.body.address,
        is_bnb: req.body.is_bnb,
      },
      (err, result) => {
        console.log(err, result);
        res.send({
          message: result,
          success: err ?? true,
        });
      }
    );
  }
};

exports.getWithdrawList = async (req, res) => {
  const result = await CryptoModel.getWithdrawList();
  res.send({
    message: result.error ? result.error : result.res,
    success: result.error ? false : true
  })
}

exports.getWallet = async (req, res) => {
  const result = await CryptoModel.getWallet();
  res.send({
    message: result.error ? result.error : result.res,
    success: result.error ? false : true
  })
}


exports.updateWithdrawApprove = async (req, res) => {
  
  const newTransactionHistory = new TransactionModel({
    from: req.body.from,
    to: req.body.to,
    amount: req.body.amount,
    token_type: req.body.token_type,
    user_id: req.body.user_id,
    status: 1,
    txID: req.body.txID
  });
  TransactionModel.create(newTransactionHistory, async (error, result) => {
    if (!error) {
      const updateResult = await CryptoModel.updateWithdrawApprove(req.params.id, req.body.txID);
      res.send({
        message: updateResult.error || updateResult.res,
        success: updateResult.error ? false : true
      }) 
      if(newTransactionHistory.token_type) {
        console.log(newTransactionHistory.user_id, newTransactionHistory.amount)
        User.updateBnbById(newTransactionHistory.user_id, newTransactionHistory.amount)
      } else {
        console.log(newTransactionHistory.user_id, newTransactionHistory.amount)
        User.updateTrxById(newTransactionHistory.user_id, newTransactionHistory.amount)
      }
    } else {
      res.send({
        message: result.error,
        success: false
      })
    }
  })
}

exports.getTransaction = async (req, res) => {
  const transactionResult = await CryptoModel.getTransaction(req.params.id);
  res.send({
    message: transactionResult.res || transactionResult.error,
    success: transactionResult.error ? false : true,
  });
};

exports.getFriendOperation = async (req, res) => {
  const transactionResult = await TransactionModel.getFriendOperation(req.params.id);
  res.send({
    message: transactionResult.res || transactionResult.error,
    success: transactionResult.error ? false : true,
  });
};
exports.getDepositHistory = async (req, res) => {
  const depositHistoryResult = await CryptoModel.getDepositHistory();
  console.log(depositHistoryResult)
  res.send({
    message: depositHistoryResult.res || depositHistoryResult.error,
    success: depositHistoryResult.error ? false : true,
  });
}
const calculateAmountFromTHSpeed = (
  thSpeed,
  currentBalance,
  currentTime,
  ratio
) => {
  const givenDate = new Date(currentTime);
  const now = Date.now();

  const differenceInMilliseconds = now - givenDate.getTime();
  const differenceInSeconds = new BN(
    Math.floor(differenceInMilliseconds / 1000)
  );

  const bnCurrentBalance = new BN(currentBalance, 10);
  const result = bnCurrentBalance.add(
    thSpeed.mul(differenceInSeconds).div(new BN(ratio))
  );

  return result.toString(10);
};

const calculateRealTHSpeed = (thSpeed, referralCount) => {
  const th_speed = new BN(thSpeed);
  if (referralCount == 0) return th_speed;

  const referral_count = new BN(referralCount);

  const base = new BN(10).pow(new BN(constant.TH_DECIMAL));
  const multiplier = new BN(2);

  const twoTimesBase = multiplier.mul(base);
  const N = referral_count.sub(new BN(1));
  const twoPowerN = new BN(2).pow(N); // 2^N
  const divisionResult = base.div(twoPowerN); // 10^11 / 2^N
  const result = twoTimesBase.sub(divisionResult);

  return th_speed.add(result);
};

const observerTrxAddress = (walletAddress, telegramId, senderPrivatekey) => {
  const intervalTime = 3000; // Check every 3 seconds
  const monitoringDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
  let intervalId;

  const stopMonitoring = () => {
    clearInterval(intervalId);
  };

  intervalId = setInterval(async () => {
    try {
      const url = `${process.env.TRON_NET_ENDPOINT}/v1/accounts/${walletAddress}/transactions`;
      const response = await axios.get(url);
      const transactions = response.data.data;

      if (transactions && transactions.length > 0) {
        const latestTransaction = transactions[0];
        // Get the full transaction details
        const transactionInfo = await tronWeb.trx.getTransaction(
          latestTransaction.txID
        );
        // Extract the sender (from) address
        const ownerAddressHex =
          transactionInfo.raw_data.contract[0].parameter.value.owner_address;
        const fromAddress = tronWeb.address.fromHex(ownerAddressHex);

        // Extract the receiver (to) address
        const toAddressHex =
          transactionInfo.raw_data.contract[0].parameter.value.to_address;
        const toAddress = tronWeb.address.fromHex(toAddressHex);

        // Extract the amount (in SUN, the smallest unit of TRX)
        const amount =
          transactionInfo.raw_data.contract[0].parameter.value.amount;

        // Trigger your custom action here
        stopMonitoring();

        const trxAmount = new BN(amount).mul(new BN(1000));
        const thSpeed = trxAmount
          .mul(new BN(Constant.DEPOSIT_RATE_TRX))
          .toString();

        //send to admin address
        try {
          // Convert the amount to Sun (1 TRX = 1,000,000 Sun)
          const amountInSun = amount;

          // Create and sign the transaction
          const tradeobj = await tronWeb.transactionBuilder.sendTrx(constant.TRX_ADMIN_ADDRESS, amountInSun, tronWeb.address.fromPrivateKey(senderPrivatekey));
          const signedTxn = await tronWeb.trx.sign(tradeobj, senderPrivatekey); // Replace with the private key of the sender's address

          // Broadcast the transaction
          const receipt = await tronWeb.trx.sendRawTransaction(signedTxn);

          if (receipt.result) {
            console.log('Transaction successful!');
            console.log('Transaction ID:', receipt.txid);
          } else {
            console.log('Transaction failed');
          }
        } catch (error) {
          console.error('Error sending TRX:', error);
        }

        const newTransactionHistory = new TransactionModel({
          from: fromAddress,
          to: toAddress,
          amount: new BN(amount).mul(new BN(1000)).toString(),
          token_type: 0,
          user_id: telegramId,
          status: 0,
          txID: transactionInfo.txID
        });
        TransactionModel.create(newTransactionHistory, (err, result) => {
          if (!err) {
            CryptoModel.updateTHSpeed(
              telegramId,
              thSpeed,
              (updateError, updateResponse) => {
                console.log(updateError, updateResponse);
              }
            );
          }
        });
      }
    } catch (error) {
      console.error("Error fetching account info:", error);
    }
  }, intervalTime);

  // Stop monitoring after 30 minutes
  setTimeout(stopMonitoring, monitoringDuration);
};

const observerBnbAddress = (walletAddress, telegramId, provider, senderPrivateKey) => {
  const intervalTime = 5000; // Check every 5 seconds
  const monitoringDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
  let intervalId;
  let lastCheckedBlock = 0;

  const stopMonitoring = () => {
    clearInterval(intervalId);
  };

  intervalId = setInterval(async () => {
    try {
      const currentBlockNumber = await provider.getBlockNumber();
      if (lastCheckedBlock === 0) {
        lastCheckedBlock = currentBlockNumber - 1;
      }

      const url = `https://api-testnet.bscscan.com/api?module=account&action=txlist&address=${walletAddress}&startblock=${lastCheckedBlock}&endblock=${currentBlockNumber}&sort=asc&apikey=J35K4W48MH4E3FD1GGT7GJJJ1631R6HAVP`;
      const response = await axios.get(url);
      const transactions = response.data.result;

      if (transactions && transactions.length > 0) {
        const latestTransaction = transactions[transactions.length - 1];
        // Extract the sender (from) address
        const fromAddress = latestTransaction.from;

        // Extract the receiver (to) address
        const toAddress = latestTransaction.to;

        // Extract the amount (in Wei, the smallest unit of BNB)
        const amount = latestTransaction.value;

        // Trigger your custom action here
        stopMonitoring();

        const bnbAmount = new BN(amount).div(new BN('1000000000'));
        const thSpeed = bnbAmount
          .mul(new BN(Constant.DEPOSIT_RATE_TRX))
          .toString();

        try {
          const wallet = new ethers.Wallet(senderPrivateKey, provider);
          const gasPrice = await provider.getGasPrice();
          const gasLimit = 21000;
          const gasFees = new BN(gasPrice.toString()).mul(new BN(gasLimit));
          const maxAmountToSend = new BN(amount).sub(new BN(gasFees))
          // Create the transaction
          const tx = {
            to: constant.BNB_ADMIN_ADDRESS,
            value: maxAmountToSend.toString(),
            gasLimit: 21000, // Standard gas limit for a simple transfer
            gasPrice: await provider.getGasPrice() // Fetch current gas price
          };

          // Sign and send the transaction
          const transaction = await wallet.sendTransaction(tx);

          // Wait for the transaction to be mined
          const receipt = await transaction.wait();
          if (receipt.status === 1) {
            console.log('Transaction successful!');
            console.log('Transaction ID:', receipt.transactionHash);
          } else {
            console.log('Transaction failed');
          }
        } catch (error) {
          console.error('Error sending BNB:', error);
        }

        const newTransactionHistory = new TransactionModel({
          from: fromAddress,
          to: toAddress,
          amount: bnbAmount.toString(),
          token_type: 1, // Adjust as necessary
          user_id: telegramId,
          status: 0,
          txID: latestTransaction.hash
        });

        TransactionModel.create(newTransactionHistory, (err, result) => {
          if (!err) {
            CryptoModel.updateTHSpeed(
              telegramId,
              thSpeed,
              (updateError, updateResponse) => {
                console.log(updateError, updateResponse);
              }
            );
          }
        });
      }

      lastCheckedBlock = currentBlockNumber;
    } catch (error) {
      console.error('Error fetching account info:', error);
    }
  }, intervalTime);

  // Stop monitoring after 30 minutes
  setTimeout(stopMonitoring, monitoringDuration);

};
