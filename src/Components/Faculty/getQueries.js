const queries = require("../../queries/FacultyQueries.js");

const permissibleQueries = {
  courseSearch: queries.courseSearch,
  degreeAuditPt1: queries.degreeAuditPt1,
  degreeAuditPt2: queries.degreeAuditPt2,
  facultyCoursesTeaching: queries.facultyCoursesTeaching,
  facultyLoginInfo: queries.facultyLoginInfo,  
  recordAttendance: queries.recordAttendance,
  studentHistory: queries.studentHistory,
  transcript: queries.transcript,
  updatePassword: queries.updatePassword,
  viewHolds: queries.viewHolds,
  viewRegistration: queries.viewRegistration,
  viewStudentAdvisees: queries.viewStudentAdvisees,
  viewStudentSchedule: queries.viewStudentSchedule
};

module.exports = permissibleQueries;
