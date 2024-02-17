const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static('public'));

const { Sequelize, DataTypes } = require("sequelize");
const {
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} = require("./config");

const db = require("./Models");
db.sequelize
  .sync({force:true})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use("/user", require("./Routes/userRoute.js"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});

app.listen(8080);
console.log("Server is listening on port 8080");
