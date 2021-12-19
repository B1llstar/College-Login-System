const queries = require("../../queries/AdminQueries.js");

const permissibleQueries = {
    adminLoginInfo: queries.adminLoginInfo,
    courseSearch: queries.courseSearch,
    createCourse: queries.createCourse,
    createUser: queries.createUser,
    deleteCourse: queries.deleteCourse,
    degreeAudit: queries.getDegreeAuditCoursesTakenP1,
    degreeAudit2: queries.getDegreeAuditCoursesTakenP2,
    dropCourse: queries.dropCourse,
    facultyCoursesTeaching: queries.facultyCoursesTeaching,
    modifyCourse: queries.modifyCourse,
    modifyUser: queries.modifyUser,
    registerForCourse: queries.registerForCourse,
    studentLoginInfo: queries.studentLoginInfo,
    studentHistory: queries.studentHistory,
    transcript: queries.transcript,
    updatePassword: queries.updatePassword,
    viewAllUsers: queries.viewAllUsers,
    viewCourseHistory: queries.viewCourseHistory,
    viewFacultyAdvisors: queries.viewFacultyAdvisors,
    viewHolds: queries.viewHolds,
    viewRegistration: queries.viewRegistration,
    viewStudentAdvisees: queries.viewStudentAdvisees,
    viewStudentSchedule: queries.viewStudentSchedule
};

module.exports = permissibleQueries;