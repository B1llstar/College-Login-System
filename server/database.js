const mysql = require("mysql");

const db = mysql.createConnection({
  multipleStatements: true,
  host: "neweastburytesting.cqsmeet2vhlb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "NewEastburyDBpass",
  database: "newEastburyAWS",
});

module.exports = db;
