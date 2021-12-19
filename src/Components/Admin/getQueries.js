const queries = require("../../queries/AdminQueries.js");

const permissibleQueries = {
    adminLoginInfo: queries.getAdminLoginInfo,
    coursesTeaching: queries.facultyCoursesTeaching,
    courseSearch: queries.courseSearch,
    createCourse: queries.createCourse,
    createUser: queries.createUser,
    deleteCourse: queries.deleteCourse,
    degreeAudit: queries.getDegreeAuditCoursesTakenP1,
    degreeAudit2: queries.getDegreeAuditCoursesTakenP2,
    dropCourse: queries.dropCourse,
    getStudentLoginInfo: queries.getStudentLoginInfo,
    getStudentHistory: queries.getStudentHistory,
    getTranscript: queries.getTranscript,
    modifyCourse: queries.modifyCourse,
    modifyUser: queries.modifyUser,
    registerForCourse: queries.registerForCourse,
    updatePassword: queries.updatePassword,
    viewAdvisors: queries.viewFacultyAdvisors,
    viewAdvisees: queries.viewStudentAdvisees,
    viewAllUsers: queries.viewAllUserInfo,
    viewCourseHistory: queries.viewCourseHistory,
    viewHolds: queries.viewHolds,
    viewRegistration: queries.viewRegistration,
    viewStudentSchedule: queries.getStudentSchedule
};

module.exports = permissibleQueries;