const queries = require("../queries/Queries_Master");

function ResearchStaff() {
  let permissibleQueries = {};

  // assign queries to constants using obj deconstruction
  const { viewGradeData, updatePassword } = queries;

  // define new key/val pairs in permissibleQueries for
  // easy access

  permissibleQueries.viewGradeData = viewGradeData;
  permissibleQueries.updatePassword = updatePassword;

  // a little unsightly and there's probably a better way
  // but like always i'm making it work!
  return permissibleQueries;
}

module.exports.ResearchStaff = ResearchStaff();
