const sessionInfo = {
  userID: "",
  authToken: "",
  setID: function (id) {
    sessionInfo.userID = id;
  },
  setAuthToken: function (token) {
    sessionInfo.authToken = token;
  },
};

module.exports = sessionInfo;
