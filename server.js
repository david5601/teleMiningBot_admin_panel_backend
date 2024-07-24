const express = require("express");
require('dotenv').config();
const cors = require("cors");
const path = require('path');

const app = express();

var corsOptions = {};

app.use(cors(corsOptions));

app.use('/uploads', express.static(path.join(__dirname, 'app/storage')));

// parse requests of content-type - application/json
app.use(express.json({limit: '500mb'})); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '500mb' })); /* bodyParser.urlencoded() is deprecated */

require("./app/routes/routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

