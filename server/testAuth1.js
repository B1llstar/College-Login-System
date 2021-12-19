// var sessionInfo = require("./sessionInfo");

// console.log(sessionInfo.userID);

const storage = require("node-persist");

async function crigne() {
  await storage.init();
  await storage.setItem("auth", 500);
  console.log(await storage.getItem("auth"));
}
crigne();
