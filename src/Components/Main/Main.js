// MAIN PAGE
// 'home' will be used for user landing pages (after login)
const queries = require("../../queries/Queries_Master");

function Main() {
  let permissibleQueries = {};

  // assign queries to constants using obj deconstruction
  const {
    viewCourseCatalog,
    getMasterSchedule,
    // LUXURY -------- HANDLE AFTER MEAT OF MATTER
    viewCourseCatalogByDepartment,
    searchForCoursePrerequisites,
    // --------------------
  } = queries;

  // define new key/val pairs in permissibleQueries for
  // easy access

  permissibleQueries.viewCourseCatalog = viewCourseCatalog;
  permissibleQueries.getMasterSchedule = getMasterSchedule;
  permissibleQueries.viewCourseCatalogByDepartment =
    viewCourseCatalogByDepartment;
  permissibleQueries.searchForCoursePrerequisites =
    searchForCoursePrerequisites;
  // a little unsightly and there's probably a better way
  // but like always i'm making it work!
  return permissibleQueries;
}

module.exports.Main = Main();
