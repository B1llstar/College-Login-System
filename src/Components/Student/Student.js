const queries = require("../../queries/Queries_Master");

function Student() {
  let permissibleQueries = {};

  // assign queries to constants using obj deconstruction
  const {
    getStudentLoginInfo,
    getStudentAssignedFacultyAdvisor,
    updatePassword,
    getStudentHistory,
    getStudentHolds,
  } = queries;

  // define new key/val pairs in permissibleQueries for
  // easy access

  permissibleQueries.getStudentLoginInfo = getStudentLoginInfo;
  permissibleQueries.getStudentAssignedFacultyAdvisor =
    getStudentAssignedFacultyAdvisor;
  permissibleQueries.updatePassword = updatePassword;
  permissibleQueries.getStudentHistory = getStudentHistory;
  permissibleQueries.getStudentHolds = getStudentHolds;

  return permissibleQueries;
}

module.exports.Student = Student();
