module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const crypto = require("../controllers/crypto.controller.js");
  const taskController = require("../controllers/task.controller.js");
  const admin = require("../controllers/admin.controller.js")
  const multer = require("multer");
  const path = require("path");
  const { v4: uuidv4 } = require("uuid");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../storage"));
    },
    filename: (req, file, cb) => {
      const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, uniqueFileName);
    },
  });
  const upload = multer({ storage });

  var router = require("express").Router();

  app.use("/api", router);

  // user management
  router.post("/auth", users.auth);
  router.get("/user", users.findAll);

  router.post("/register", users.register);
  router.post("/login", users.login);
  //crypto management
  router.get("/trx/:id", crypto.getTrx);
  router.get("/bnb/:id", crypto.getBnb);
  router.post("/generate_trx_address/:id", crypto.generateTrx);
  router.post("/generate_bnb_address/:id", crypto.generateBnb);
  router.get("/withdraw", crypto.getWithdrawList);
  router.put("/withdraw/:id", crypto.updateWithdrawApprove);
  router.post("/withdraw", crypto.withdraw);
  router.get("/transaction/:id", crypto.getTransaction);
  router.get("/friend/:id", crypto.getFriendOperation);
  router.get("/deposit", crypto.getDepositHistory);
  router.get("/wallet", crypto.getWallet)
  //task management
  router.get("/tasks/:id", taskController.getTasks);
  router.get("/task", taskController.getAll);
  router.post("/task", upload.single("image_url"), taskController.createTask);
  router.delete("/task/:id", taskController.delete);
  router.post("/taskstatus", taskController.createTaskStatus);

  //admin management
  router.put('/admin/:id', admin.update);
  router.get('/admin', admin.findOne)
};
