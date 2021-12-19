const queries = require("../../queries/FacultyQueries.js");

const permissibleQueries = {
  courseSearch: queries.courseSearch,
  dropCourse: queries.dropCourse,
  degreeAudit: queries.getDegreeAuditCoursesTakenP1,
  degreeAudit2: queries.getDegreeAuditCoursesTakenP2,
  registerForCourse: queries.registerForCourse,
  getStudentHistory: queries.getStudentHistory,
  getStudentLoginInfo: queries.getStudentLoginInfo,
  getTranscript: queries.getTranscript,
  updatePassword: queries.updatePassword,
  viewAdvisees: queries.getListOfStudentsFacultyIsAdvising,
  viewHolds: queries.viewHolds,
  viewRegistration: queries.viewRegistration,
};

module.exports = permissibleQueries;
