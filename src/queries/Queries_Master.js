// [MAIN] View School's Course Catalog

module.exports = {
  /*VISITOR - UPDATED Query to view the school's entire Course Catalog*/

  viewCourseCatalog:
    "SELECT c.courseName AS 'Course' , c.courseID AS 'Course ID', \n" +
    "d.deptName AS 'Department', c.numCredits AS 'Credits' FROM dept d\n" +
    "JOIN course c ON d.deptID=c.deptID ORDER BY c.courseName ASC;",

  // [Admin] View All User Info
  viewAllUserInfo:
    "SELECT u.userID, u.userType, u.firstName, u.lastName, u.phoneNumber, u.DOB, u.street, u.city, u.state, u.zip, l.userEmail FROM user u\n" +
    "JOIN loginInfo l ON u.userID=l.userID;",

  // [Admin] View Specific User's Info
  // Replace userID value with whichever userID value should be viewed
  viewSpecificUserInfo:
    "SELECT u.userID, u.userType, u.firstName, u.lastName, u.phoneNumber, u.DOB, u.street, u.city, u.state, u.zip, l.userEmail FROM user u\n" +
    "RIGHT JOIN loginInfo l ON u.userID=l.userID\n" +
    "WHERE u.userID=700107173;",

  // [ADMIN]
  /*Admin Query to retrieve full list of Faculty who are an Advisor*/
  getFullListOfFacultyAdvisors:
    "SELECT adv.facultyID as 'Faculty ID', CONCAT(adv.firstName,' ',adv.lastName) AS 'Advisor Name', adv.phoneNumber AS 'Advisor Phone', l.userEmail AS 'Advisor Email' FROM loginInfo l\n" +
    "RIGHT JOIN\n" +
    "(SELECT facID.facultyID, u.firstName, u.lastName, u.phoneNumber FROM user u\n" +
    "	JOIN\n" +
    "	(SELECT facultyID FROM advisor) AS facID\n" +
    "	WHERE facID.facultyID=u.userID) AS adv\n" +
    "ON adv.facultyID=l.userID;",

  // [ADMIN]
  /*Admin Query to retrieve a full list of students who have an advisor*/
  getStudentsWhoHaveAdvisor:
    "SELECT students.studentID AS 'Student ID', CONCAT(students.LastName,', ',students.firstName) AS 'Student Name',\n" +
    "students.phoneNumber AS 'Student Phone', l.userEmail AS 'Student Email' FROM loginInfo l\n" +
    "RIGHT JOIN\n" +
    "(SELECT facList.studentID, u.firstName, u.lastName, u.phoneNumber FROM user u\n" +
    "	JOIN\n" +
    "	(SELECT studentID FROM advisor) AS facList\n" +
    "	WHERE facList.studentID=u.userID) AS students\n" +
    "ON students.studentID=l.userID\n" +
    "ORDER BY students.lastName ASC;",

  // [Admin?] Retrieve Student's Login Info
  /*Replace userID value with whichever userID value should be viewed*/

  getStudentLoginInfo:
    "SELECT u.userID, u.userType, u.firstName, u.lastName, l.userEmail, l.password FROM\n" +
    "user u RIGHT JOIN loginInfo l ON u.userID=l.userID\n" +
    "WHERE u.userID=700107173;",

  // [Research Staff] View Grade Data
  viewGradeData:
    "SELECT courseGrade.courseID AS 'CourseID', courseGrade.courseName AS 'Course Name', \n" +
    "d.deptName AS 'Department Name', courseGrade.grade AS 'Grade', courseGrade.semYear AS 'Semester' FROM dept d\n" +
    "JOIN\n" +
    "(SELECT crnGrade.courseID, c.courseName, c.deptID, crnGrade.studentID, crnGrade.grade, crnGrade.semYear FROM course c\n" +
    "JOIN" +
    "(SELECT sh.studentID, sh.crn, sh.grade, s.courseID, s.semyear FROM studentHistory sh\n" +
    "JOIN section s ON sh.crn=s.crn) AS crnGrade\n" +
    "ON c.courseID=crnGrade.courseID) AS courseGrade\n" +
    "ON d.deptID=courseGrade.deptID\n" +
    "ORDER BY Semester ASC;",

  // [STUDENT] /*Query to retreive student's login info*/
  getStudentLoginInfo:
    "SELECT u.userID, u.userType, u.firstName, u.lastName, l.userEmail, l.password FROM\n" +
    "user u RIGHT JOIN loginInfo l ON u.userID=l.userID\n" +
    "WHERE u.userID=700107173;",

  // [STUDENT]
  /*Student Query to retrieve info of a individual Student's assigned Faculty Advisor*/
  getAdvisor:
    "SELECT CONCAT(adv.firstName,' ',adv.lastName) AS 'Advisor Name', adv.phoneNumber AS 'Advisor Phone', l.userEmail AS 'Advisor Email' FROM loginInfo l\n" +
    "RIGHT JOIN\n" +
    "(SELECT facID.facultyID, u.firstName, u.lastName, u.phoneNumber FROM user u\n" +
    "	JOIN\n" +
    "	(SELECT facultyID FROM advisor\n" +
    "		WHERE studentID=?) AS facID \n" +
    "	WHERE facID.facultyID=u.userID) AS adv\n" +
    "ON adv.facultyID=l.userID;",
  /*student's ID number gets input on this line, the one with facID*/

  // STUDENT, FACULTY, ADMIN (can update anybody's), RESEARCH STAFF
  /*Query to update password*/
  updatePassword:
    "UPDATE loginInfo\n" +
    "SET password='newEastbury'\n" +
    "WHERE userID=700101657;",
  /*Replace userID value with whichever userID value should be viewed*/

  // [MAIN PAGE]
  getMasterSchedule:
    "(SELECT cWithD.crn AS 'CRN Number', cWithD.courseID AS 'Course ID', cWithD.courseName AS 'Course Title', cWithD.deptName AS 'Dept Name',\n" +
    "cWithD.numCredits AS 'Credits', CONCAT(u.lastName,', ',u.firstName) AS 'Instructor', \n" +
    "cWithD.roomID AS 'Room', cWithD.semYear AS 'Semester', cWithD.days AS 'Course Days', cWithD.Time AS 'Course Time' FROM user u\n" +
    "JOIN\n" +
    "	(SELECT cNamed.crn, cNamed.courseID, cNamed.courseName, d.deptName, cNamed.numCredits, cNamed.facultyID, \n" +
    "	cNamed.roomID, cNamed.semYear, cNamed.days, cNamed.Time FROM dept d\n" +
    "	JOIN\n" +
    "	(SELECT courseSched.crn, c.courseID, c.courseName, c.deptID, c.numCredits, courseSched.facultyID, \n" +
    "		courseSched.roomID, courseSched.semYear, courseSched.days, courseSched.Time FROM course c\n" +
    "		JOIN\n" +
    "			(SELECT s.crn, s.courseID, s.facultyID, s.roomID, s.semYear, CONCAT(tSlots1.day,'/',tSlots2.day) AS 'days', tSlots1.Time FROM section s\n" +
    "			JOIN\n" +
    "			(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "				CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "					(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "					JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n" +
    "					JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "					JOIN day d ON tsd.dayID=d.dayID\n" +
    "					JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1\n" +
    "				ON s.timeslot1=tSlots1.TSID\n" +
    "			JOIN\n" +
    "				(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "				CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "					(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "					JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n" +
    "					JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "					JOIN day d ON tsd.dayID=d.dayID\n" +
    "					JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n" +
    "				ON s.timeslot2=tSlots2.TSID\n" +
    "			WHERE s.semYear='S2022') AS courseSched\n" +
    "		ON c.courseID=courseSched.courseID) AS cNamed\n" +
    "	ON d.deptID=cNamed.deptID) AS cWithD\n" +
    "ON cWithD.facultyID=u.userID)\n" +
    "ORDER BY cWithD.deptName;",

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

  // [STUDENT, FACULTY, ADMIN]
  /*Query to retrieve student's history*/
  getStudentHistory:
    "SELECT instructor.studentID AS 'Student ID', instructor.crn AS 'CRN', instructor.courseID AS 'Course ID', \n" +
    "instructor.courseName AS 'Course Name', instructor.semYear AS 'Semester', \n" +
    "CONCAT(u.lastName,', ',u.firstName) AS 'Professor', instructor.grade AS 'Instructor' FROM user u\n" +
    "JOIN\n" +
    "(SELECT f.facultyID, courseHistory.studentID, courseHistory.courseID, courseHistory.courseName, courseHistory.crn, courseHistory.semYear, courseHistory.grade FROM faculty f\n" +
    "JOIN\n" +
    "(SELECT history.studentID, course.courseID, course.courseName, history.crn, history.semYear, history.grade, history.facultyID FROM course\n" +
    "JOIN\n" +
    "(SELECT sh.studentID, sh.crn, s.courseID, sh.semYear, sh.grade, s.facultyID FROM studentHistory sh\n" +
    "JOIN \n" +
    "section s ON sh.crn=s.crn) AS history\n" +
    "ON history.courseID=course.courseID) AS courseHistory\n" +
    "ON courseHistory.facultyID=f.facultyID) AS instructor\n" +
    "ON u.userID=instructor.facultyID\n" +
    "WHERE studentID='?'  \n" +
    "ORDER BY studentID ASC;",
  /*Student's ID number gets input on this line, remove WHERE clause to get entire table (Admin Version)*/

  // [STUDENT, FACULTY, ADMIN]
  /*Query to retireve a student's holds*/
  viewHolds:
    "SELECT sHolds.studentID AS 'Student ID', sHolds.studentName AS 'Student Name', \n" +
    "h.holdDesc AS 'Description', h.holdType AS 'Type of Hold', sHolds.dateAdded AS 'Date Applied' FROM hold h\n" +
    "JOIN\n" +
    "(SELECT sh.holdName, sh.DateAdded, studentInfo.studentID, studentInfo.studentName FROM studentHold sh\n" +
    "JOIN\n" +
    "(SELECT s.studentID, CONCAT(u.lastName,', ',u.firstName) AS studentName FROM user u\n" +
    "JOIN student s ON u.userID=s.studentID) AS studentInfo\n" +
    "ON studentInfo.studentID=sh.studentID) AS sHolds\n" +
    "ON h.holdName=sHolds.holdName\n" +
    "WHERE sHolds.studentID='?';",
  /*Student's ID number gets input on this line, remove WHERE clause to get entire table (Admin Version)*/

  // [FACULTY]
  /*Query to retrieve a list of Students a Faculty is Advising*/
  getListOfStudentsFacultyIsAdvising:
    "SELECT students.studentID AS 'Student ID', CONCAT(students.LastName,', ',students.firstName) AS 'Student Name',\n" +
    "students.phoneNumber AS 'Student Phone', l.userEmail AS 'Student Email' FROM loginInfo l\n" +
    "RIGHT JOIN\n" +
    "(SELECT facList.studentID, u.firstName, u.lastName, u.phoneNumber FROM user u\n" +
    "	JOIN\n" +
    "	(SELECT studentID FROM advisor\n" +
    "		WHERE facultyID=900854299) AS facList\n" +
    "	WHERE facList.studentID=u.userID) AS students\n" +
    "ON students.studentID=l.userID\n" +
    "ORDER BY students.lastName ASC;",
  /*faculty's ID number gets input on this line*/

  /*Queries for majors and Programs tab, first query is Majors, 
second is minors, both should display on load of page, 
with a divider between them, and a Header to indicate major/minor*/
  majorsAndPrograms:
    "SELECT m.majorName AS 'Major', m.creditsReq AS 'Total Credits', d.deptName AS 'Department' FROM major m\n" +
    "JOIN dept d ON m.deptID=d.deptID;",

  minorsAndPrograms:
    /*Query 2 - Minors and programs*/
    "SELECT m.minorName AS 'Minor', m.creditsReq AS 'Total Credits', d.deptName AS 'Department' FROM minor m\n" +
    "JOIN dept d ON m.deptID=d.deptID;",

  /*Student, Faculty, Admin, View Student's registration for next semester*/
  viewRegistration:
    "SELECT instructor.studentID AS 'Student ID', instructor.crn AS 'CRN', instructor.courseID AS 'Course ID', \n" +
    "instructor.courseName AS 'Course Name', instructor.semYear AS 'Semester', \n" +
    "CONCAT(u.lastName,', ',u.firstName) AS 'Professor', instructor.grade AS 'Grade' FROM user u\n" +
    "JOIN \n" +
    "(SELECT f.facultyID, courseHistory.studentID, courseHistory.courseID, courseHistory.courseName, courseHistory.crn, courseHistory.semYear, courseHistory.grade FROM faculty f\n" +
    "JOIN\n" +
    "(SELECT history.studentID, course.courseID, course.courseName, history.crn, history.semYear, history.grade, history.facultyID FROM course\n" +
    "JOIN\n" +
    "(SELECT sh.studentID, sh.crn, s.courseID, sh.semYear, sh.grade, s.facultyID FROM studentHistory sh\n" +
    "JOIN \n" +
    "section s ON sh.crn=s.crn) AS history\n" +
    "ON history.courseID=course.courseID) AS courseHistory\n" +
    "ON courseHistory.facultyID=f.facultyID) AS instructor\n" +
    "ON u.userID=instructor.facultyID\n" +
    "WHERE semYear='S2022' AND studentID=700102001\n;",
  /*studentID at very end is a variable, only the student's 9 digit gets replaced with the currently logged-in student*/

  /*Student, Faculty, Admin - Course Search Query, multiple variables from user input*/

  courseSearch:
    "SELECT finalList.crn AS 'CRN', finalList.courseID AS 'Course ID', finalList.courseName AS 'Course Name', finalList.roomID AS 'Room', \n" +
    "finalList.Instructor, finalList.Days, finalList.Time, finalList.semYear AS 'Semester' FROM\n" +
    "(SELECT courseList.*, times1.TSID, CONCAT (substring(times1.day,1,1),'/',substring(times2.day,1,1)) AS 'Days', times1.Time FROM\n" +
    "(SELECT S2022.crn, S2022.courseID, S2022.courseName, S2022.roomID,\n" +
    "CONCAT (u.firstName, ', ', u.lastName) as 'Instructor', S2022.semYear, S2022.timeSlot1, S2022.timeSlot2 FROM user u\n" +
    "RIGHT JOIN (SELECT s.crn, s.courseID, catalog.courseName, catalog.deptName, s.roomID, s.facultyID, s.semYear, s.timeSlot1, s.timeSlot2 from section s\n" +
    "RIGHT JOIN (SELECT d.deptID, d.deptName, c.courseID, c.courseName FROM dept d\n" +
    "JOINcourse c ON d.deptID=c.deptID) AS catalog ON s.courseID=catalog.courseID\n" +
    "WHERE s.semYear='S2022') AS S2022 ON u.userID=S2022.facultyID) AS courseList\n" +
    "LEFT JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n" +
    "JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID\n" +
    "JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as times1\n" +
    "ON courseList.timeSlot1=times1.TSID\n" +
    "JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n" +
    "JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID\n" +
    "JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as times2\n" +
    "ON courseList.timeslot2=times2.TSID) AS finalList\n" +
    "WHERE finalList.crn='25864';",
  /*last line has variables replaced in pairs after WHERE, a column and a 'user input' (in single quotes),
here's a list of examples column names are exact, values are samples:
finalList.crn = '25864';
finalList.courseID = 'AA101';
finalList.courseName = '%userInput%'; (percent symbols are wildcards, this returns anything containing whats between them
finalList.Instructor = '%userInput%'; */

  /*Student Query to retreive student transcript, studentID gets inserted at bottom*/
  getTranscript:
    "SELECT SUBSTRING(c1.courseID,1,2) AS 'Subject', SUBSTRING(c1.courseID,3,3) AS 'Course', c1.courseName AS 'Title', sh2.grade AS 'Grade', \n" +
    "c1.numCredits AS 'Credit Hours', sh2.semYear AS 'Term' FROM course c1\n" +
    "JOIN (SELECT sh1.studentID, sh1.crn, sh1.semYear, sec1.courseID, sh1.grade FROM studentHistory sh1\n" +
    "JOIN section sec1 ON sh1.crn=sec1.crn) AS sh2 ON c1.courseID=sh2.courseID\n" +
    "WHERE sh2.studentID='?' ORDER BY SUBSTRING(sh2.semYear,2,4) ASC;" /* Insert studentID on this line*/,
  /* Amir gave me this algorithm to convert a grade letter into a GPA, which we should display somewhere on the Transcript page:
	arrayOfGradeLatters= ["A","A-","B+","B","B-","C+","C","C-","D+","D","F"];
	arrayOfGradeValues= [4.0,3.7,3.3,3.0,2.7,2.3,2.0,1.7,1.3,1.0,0.0];
	for(i=0; i< len(grades);i++){
		gradeindex = array_search(grades[i], arrayOfGradeLatters);
		gradeadder += floatval($arrayOfGradeValues[$gradeindex]);
		GPA = floatval(gradeadder/len(grades));
	} Then you'd return GPA of course */

  getDegreeAuditCoursesTakenP1:
    /*Student Query for Degree Audit - This is two queries, the first retreives all the courses taken
the second retrieves "Courses Completed, Courses Needed, Percent Complete
First Query:*/
    "SELECT c1.courseID AS 'Course', c1.courseName AS 'Title', sh2.grade AS 'Grade', \n" +
    "c1.numCredits AS 'Credits', sh2.semYear AS 'Term' FROM course c1\n" +
    "JOIN (SELECT sh1.studentID, sh1.crn, sh1.semYear, sec1.courseID, sh1.grade FROM studentHistory sh1\n" +
    "JOIN section sec1 ON sh1.crn=sec1.crn) AS sh2 ON c1.courseID=sh2.courseID\n" +
    "WHERE sh2.studentID='700100828' ORDER BY SUBSTRING(sh2.semYear,2,4) ASC;" /*Insert StudentID on this line*/,
  /*Second Query*/
  getDegreeAuditCoursesTakenP2:
    "SELECT COUNT(*) AS 'Courses Completed', total.total AS 'Courses Needed', \n" +
    "CONCAT(FORMAT((COUNT(*)/total.total)*100,2),'%') AS 'Percent Complete' FROM studentHistory sh\n" +
    "JOIN (SELECT sm.studentID, sm.majorID, COUNT(*) AS 'total' FROM studentMajor sm\n" +
    "JOIN majorCourse mc ON sm.majorID=mc.majorID\n" +
    "WHERE sm.studentID='700100828') AS total\n" /*Insert StudentID on this line*/ +
    "ON sh.studentID=total.studentID;",

  /*Faculty Query - to view courses they are teaching, facultyID get inserted at bottom*/
  facultyCoursesTeaching:
    "SELECT list.crn AS 'CRN', list.courseID AS 'Course ID', c.courseName AS 'Course Name', list.roomID As 'Room', \n" +
    "list.faculty AS 'Instructor', list.semYear as 'Semester', list.Days, list.Time, list.facultyID FROM course c\n" +
    "JOIN (SELECT s.crn, s.courseID, s.roomID, s.semYear, s.facultyID, CONCAT(u.lastName, ', ', u.firstName) AS 'faculty', \n" +
    "CONCAT(SUBSTRING(tSlots1.day,1,1),'/',SUBSTRING(tSlots2.day,1,1)) as Days, tSlots2.Time FROM section s\n" +
    "JOIN user u ON s.facultyID=u.userID JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1\n" +
    "ON s.timeslot1=tSlots1.TSID\n JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n" +
    "ON s.timeslot2=tSlots2.TSID) AS list ON list.courseID=c.courseID WHERE (list.semYear='F2021' OR list.semYear='S2022') \n" +
    "AND facultyID='900388901' ORDER BY semYear;",
  /*facultyID gets inserted on the last line*/

  /*Faculty Query - Access a student's schedule.  studentID is input at the bottom*/
  getStudentSchedule:
    "SELECT final.Student, final.studentID As 'StudentID', final.crn AS 'CRN', final.courseID AS 'Course ID',\n" +
    "final.courseName AS 'Course Name', final.roomID AS 'Room', final.Instructor, final.semYear AS 'Semester', final.Days, final.Time FROM \n" +
    "(SELECT CONCAT(u2.lastName,', ',u2.firstName) AS 'Student', studentSet.* FROM user u2 JOIN\n" +
    "(SELECT e.studentID, facultySet.* FROM enrollment e JOIN\n" +
    "(SELECT CONCAT(u.lastName,', ',u.firstName) AS 'Instructor', courseSet.* FROM user u JOIN\n" +
    "(SELECT c.courseName, timeset.* FROM course c JOIN \n" +
    "(SELECT s.crn, s.courseID, s.facultyID, s.roomID, s.semYear, CONCAT(SUBSTRING(tSlots1.Day,1,1),\n" +
    "'/',SUBSTRING(tSlots2.Day,1,1)) AS Days, tSlots1.Time FROM section s JOIN\n" +
    "(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1\n" +
    "ON s.timeslot1=tSlots1.TSID JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n" +
    "ON s.timeslot2=tSlots2.TSID) AS timeset ON c.courseID=timeset.courseID) AS courseSet\n" +
    "ON u.userID=courseSet.facultyID) AS facultySet ON e.crn=facultySet.crn) AS studentSet\n" +
    "ON studentSet.studentID=u2.userID) AS final WHERE final.studentID='700100828';",
  /*StudentID gets entered on the last line*/

  /*Faculty Query - record attendance*/
  recordAttendance:
    "INSERT INTO attendance(studentID, crn, isPresent, date) VALUES ('700114370', '25195', 'Yes' '2021-12-15');",

  /*Admin Query - Create a user*/
  createUser:
    "INSERT INTO user(studentID, userType, firstName, lastName, phoneNumber, DOB, street, city, state, zip)\n" +
    "VALUES('700123456', 'Student', 'firstName', 'lastName', '5165551234', '1999-05-04', '123 dummy st', 'faketown', 'NY', '12345');",

  /*Admin Query - modify a user (each variable for SET is optional, if a field is blank it should be left out*/
  modifyUser:
    "UPDATE user \n" +
    "SET userID='701115743', userType='Student',firstName='', lastName='', \n" +
    "phoneNumber='', DOB='', street='', city='', state='', zip=''\n" +
    "WHERE userID='700115743';",

  /*Admin Query - View Course history*/
  viewCourseHistory:
    "SELECT list.crn AS 'CRN', list.courseID AS 'Course ID', c.courseName AS 'Course Name', list.roomID As 'Room', \n" +
    "list.faculty AS 'Instructor', list.semYear as 'Semester', list.Days, list.Time FROM course c\n" +
    "JOIN (SELECT s.crn, s.courseID, s.roomID, s.semYear, s.facultyID, CONCAT(u.lastName, ', ', u.firstName) AS 'faculty', \n" +
    "CONCAT(SUBSTRING(tSlots1.day,1,1),'/',SUBSTRING(tSlots2.day,1,1)) as Days, tSlots2.Time FROM section s\n" +
    "JOIN user u ON s.facultyID=u.userID JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1\n" +
    "ON s.timeslot1=tSlots1.TSID JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n" +
    "ON s.timeslot2=tSlots2.TSID) AS list ON list.courseID=c.courseID ORDER BY list.semYear DESC, list.courseID;",

  /*Student, Admin Query - Register for a course*/
  registerForCourse:
    "INSERT INTO enrollment(studentID, crn, dateEnrolled, grade) VALUES ('700114370', '25195', CURDATE(), 'IP');",

  /*Student, Admin Query - Drop a Course*/
  dropCourse: "DELETE FROM enrollment WHERE studentID='?' AND crn='?';",

  /*Admin Query - Create a course*/
  createCourse:
    "INSERT INTO course(courseID, courseName, numCredits, deptID) VALUES('BB101', 'Beginner Bottle Breaking', '4', 'D08');",

  /*Admin Query - Modify a course*/
  modifyCourse:
    "UPDATE course\n" +
    "SET courseID='BB101', courseName='Beginner Bottle Breaking', numCredits='4', deptID='D08'\n" +
    "WHERE courseID='BB101';",

  deleteCourse:
    /*Admin Query - Delete a course*/
    "DELETE FROM course WHERE courseID='BB101';",
};
