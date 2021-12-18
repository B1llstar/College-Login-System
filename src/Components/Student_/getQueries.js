const queries = require("../../queries/StudentQueries.js");

const permissibleQueries = {
  dropCourse: queries.dropCourse,
  viewHolds: queries.viewHolds,
  viewRegistration: queries.viewRegistration,
  courseSearch: queries.courseSearch,
  registerForCourse: queries.registerForCourse,
  getTranscript: queries.getTranscript,
  degreeAudit: queries.getDegreeAuditCoursesTakenP1,
  degreeAudit2: queries.getDegreeAuditCoursesTakenP2,
  viewAdvisor: queries.getAdvisor,
  getStudentLoginInfo: queries.getStudentLoginInfo,
  updatePassword: queries.updatePassword,
  getStudentHistory: queries.getStudentHistory,
};

module.exports = permissibleQueries;
