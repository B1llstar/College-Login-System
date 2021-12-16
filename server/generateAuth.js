const UIDGenerator = require("uid-generator");
const uidgen = new UIDGenerator();

function generateAuthToken() {
  const auth = uidgen.generateSync();
  return auth;
}

module.exports.generateAuthToken = generateAuthToken;
