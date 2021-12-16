const queries = require("../queries/Queries_Master");

function Faculty() {
  let permissibleQueries = {};

  // assign queries to constants using obj deconstruction
  const {
    getStudentHistory,
    getStudentHolds,
    getListOfStudentsFacultyIsAdvising,
  } = queries;
  // console.log(getStudentHistory);

  // define new key/val pairs in permissibleQueries for
  // easy access

  permissibleQueries.getStudentHistory = getStudentHistory;
  permissibleQueries.getStudentHolds = getStudentHolds;
  permissibleQueries.getListOfStudentsFacultyIsAdvising =
    getListOfStudentsFacultyIsAdvising;

  // a little unsightly and there's probably a better way
  // but like always i'm making it work!
  return permissibleQueries;
}

module.exports.Faculty = Faculty();
