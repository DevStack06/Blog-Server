const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

// mongoose.connect(
//   "mongodb+srv://BlogUser:Blog@9711@cluster0-vdapo.gcp.mongodb.net/AppDB?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   }
// );

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});

//middleware
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);

app.route("/").get((req, res) => res.json("hello world !"));

app.listen(port, () => console.log(`welcome your listinnig at port ${port}`));
