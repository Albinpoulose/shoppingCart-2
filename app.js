const express = require("express");
const connectDB = require("./config/connection");
const app = express();
var cors = require('cors');
require('dotenv').config();



const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 4000;

connectDB();

try {
  app.use("/admin", adminRouter);
  app.use("/", userRouter);
} catch (error) {
  console.log(error); 
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
