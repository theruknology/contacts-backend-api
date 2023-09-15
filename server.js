const env = require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDB = require("./config/dbConnection.js");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use("/api/contacts", require('./routes/contactRoutes.js'));
app.use("/api/users", require('./routes/userRoutes.js'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Started server on ${port}`);
});

// Sample body data
// {
  // "name": "Mohammed",
  // "email": "asdf@asdf.com",
  // "phone": "123123123"
// }
