
// We will implement these if we get everything done and have time for polish
// They will be migrated to the appropriate folders and removed from here when implemented

module.exports = {

    // [LUXURY]
    /*Query to view the school's Course Catalog by a specific department*/
    viewCourseCatalogByDepartment:
    "SELECT catalog.courseName AS 'Course Name', catalog.courseID AS 'Course ID', catalog.deptName AS 'Dept Name' FROM \n" +
    "(SELECT d.deptID, d.deptName, c.courseID, c.courseName FROM dept d\n" +
    "JOIN\n" +
    "course c ON d.deptID=c.deptID\n" +
    "WHERE d.deptID='D01' \n" +
    ") AS catalog;",
    /*Department ID gets inserted between ''*/

    // [LUXURY]
    /*Query to search for course prerequisites*/
    searchForCoursePrerequisites:
    "SELECT DISTINCT courses.courseID AS 'Course ID', courses.courseName AS 'Course Name',\n" +
    "preReqs.coursePreReq AS 'PreReq ID', preReqs.courseName AS 'PreRequisite Course Name', \n" +
    "courses.gradeRequired AS 'Minimum Grade' FROM\n" +
    "(SELECT pr1.coursePreReq, c.courseName FROM course c\n" +
    "JOIN coursePreReq pr1 ON c.courseID=pr1.coursepreReq) AS preReqs\n" +
    "JOIN\n" +
    "(SELECT pr2.courseID, c.courseName, pr2.gradeRequired, pr2.coursePreReq FROM course c\n" +
    "JOIN coursePreReq pr2 ON c.courseID=pr2.courseID) AS courses\n" +
    "ON preReqs.coursePreReq=courses.coursePreReq\n" +
    "WHERE courses.courseID='BE201' \n" +
    "ORDER BY courses.courseID ASC;",
    /*Optional WHERE clause for individual classes, remove line for complete PreReq list*/

}