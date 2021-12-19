const queries = require("../../queries/StudentQueries.js");

const permissibleQueries = {
  courseSearch: queries.courseSearch,
  degreeAuditPt1: queries.degreeAuditPt1,
  degreeAuditPt2: queries.degreeAuditPt2,
  dropCourse: queries.dropCourse,
  registerForCourse: queries.registerForCourse,
  studentHistory: queries.studentHistory,
  transcript: queries.transcript,
  updatePassword: queries.updatePassword,
  viewAdvisor: queries.viewAdvisor,
  viewHolds: queries.viewHolds,
  viewRegistration: queries.viewRegistration,
  viewStudentLoginInfo: queries.viewStudentLoginInfo
};

module.exports = permissibleQueries;
