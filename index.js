const express = require("express");
const app = express();

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;

try {
  app.use("/admin", adminRouter);
  app.use("/", userRouter);
} catch (error) {
  console.log(error); 
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
