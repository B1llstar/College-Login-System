/* var sessionInfo = require("./sessionInfo");

sessionInfo.setID(10);
console.log(sessionInfo.userID);
*/
const storage = require("node-persist");
async function crigne() {
  const storage = require("node-p");
  await storage.init();

  console.log(await storage.getItem("auth"));
}
crigne();
