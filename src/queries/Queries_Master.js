Queries;

// [Research Staff] View School's Course Catalog

const viewCourseCatalog =
  "SELECT courseGrade.courseID AS 'CourseID', courseGrade.courseName AS 'Course Name', \n" +
  "d.deptName AS 'Department Name', courseGrade.grade AS 'Grade', courseGrade.semYear AS 'Semester' FROM dept d\n" +
  "JOIN\n" +
  "(SELECT crnGrade.courseID, c.courseName, c.deptID, crnGrade.studentID, crnGrade.grade, crnGrade.semYear FROM course c\n" +
  "JOIN\n" +
  "(SELECT sh.studentID, sh.crn, sh.grade, s.courseID, s.semyear FROM studentHistory sh\n" +
  "JOIN section s ON sh.crn=s.crn) AS crnGrade\n" +
  "ON c.courseID=crnGrade.courseID) AS courseGrade\n" +
  "ON d.deptID=courseGrade.deptID\n" +
  "ORDER BY Semester ASC;";

// [Admin] View All User Info
const viewAllUserInfo =
  "SELECT u.userID, u.userType, u.firstName, u.lastName, u.phoneNumber, u.DOB, u.street, u.city, u.state, u.zip, l.userEmail FROM user u\n" +
  "JOIN loginInfo l ON u.userID=l.userID;";

// [Admin] View Specific User's Info
// Replace userID value with whichever userID value should be viewed
const viewSpecificUserInfo =
  "SELECT u.userID, u.userType, u.firstName, u.lastName, u.phoneNumber, u.DOB, u.street, u.city, u.state, u.zip, l.userEmail FROM user u\n" +
  "RIGHT JOIN loginInfo l ON u.userID=l.userID\n" +
  "WHERE u.userID=700107173;";

  // [Admin?] Retrieve Student's Login Info
  /*Replace userID value with whichever userID value should be viewed*/

  const fetchStudentLoginInfo = "SELECT u.userID, u.userType, u.firstName, u.lastName, l.userEmail, l.password FROM\n"+
  "user u RIGHT JOIN loginInfo l ON u.userID=l.userID\n"+
  "WHERE u.userID=700107173;";
