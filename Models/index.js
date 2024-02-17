const dbConfig = require("../config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DATABASE_NAME,
  dbConfig.DATABASE_USERNAME,
  dbConfig.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, Sequelize);

db.items = require("./items.js")(sequelize, Sequelize);

db.sales=require("./sales.js")(sequelize, Sequelize);

module.exports = db;
