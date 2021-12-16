const queries = require("../queries/Queries_Master");

function Admin() {
  let permissibleQueries = {};

  // assign queries to constants using obj deconstruction
  const {
    viewAllUserInfo,
    viewSpecificUserInfo,
    getFullListOfFacultyAdvisors,
    getStudentsWhoHaveAdvisor,
    getStudentLoginInfo,
    updatePassword,
    getStudentHistory,
    getStudentHolds,
  } = queries;
  console.log(viewAllUserInfo);

  // define new key/val pairs in permissibleQueries for
  // easy access

  permissibleQueries.viewAllUserInfo = viewAllUserInfo;
  permissibleQueries.viewSpecificUserInfo = viewSpecificUserInfo;
  permissibleQueries.getFullListOfFacultyAdvisors =
    getFullListOfFacultyAdvisors;
  permissibleQueries.getStudentsWhoHaveAdvisor = getStudentsWhoHaveAdvisor;
  permissibleQueries.getStudentLoginInfo = getStudentLoginInfo;
  permissibleQueries.updatePassword = updatePassword;
  permissibleQueries.getStudentHistory = getStudentHistory;
  permissibleQueries.getStudentHolds = getStudentHolds;

  // a little unsightly and there's probably a better way
  // but like always i'm making it work!
  return permissibleQueries;
}

module.exports.Admin = Admin();
