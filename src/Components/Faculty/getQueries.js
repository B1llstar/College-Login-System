const queries = require("../../queries/FacultyQueries.js");

const permissibleQueries = {
  coursesTeaching: queries.facultyCoursesTeaching,
  courseSearch: queries.courseSearch,
  dropCourse: queries.dropCourse,
  degreeAudit: queries.getDegreeAuditCoursesTakenP1,
  degreeAudit2: queries.getDegreeAuditCoursesTakenP2,
  facultyLoginInfo: queries.getFacultyLoginInfo,
  recordAttendance: queries.recordAttendance,
  registerForCourse: queries.registerForCourse,
  getStudentHistory: queries.getStudentHistory,
  getTranscript: queries.getTranscript,
  updatePassword: queries.updatePassword,
  viewAdvisees: queries.viewAdvisees,
  viewHolds: queries.viewHolds,
  viewRegistration: queries.viewRegistration,
  viewStudentSchedule: queries.viewStudentSchedule
};

module.exports = permissibleQueries;
