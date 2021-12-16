/*Select DB for use*/
"USE newEastburyAWS;";


// ADMIN
/*Admin Query, view all user info*/
"SELECT u.userID, u.userType, u.firstName, u.lastName, u.phoneNumber, u.DOB, u.street, u.city, u.state, u.zip, l.userEmail FROM user u\n"+
"JOIN loginInfo l ON u.userID=l.userID;";

/*Admin Query, view a specific user's info*/
"SELECT u.userID, u.userType, u.firstName, u.lastName, u.phoneNumber, u.DOB, u.street, u.city, u.state, u.zip, l.userEmail FROM user u\n"+
"RIGHT JOIN loginInfo l ON u.userID=l.userID\n"+
"WHERE u.userID=700107173;";
/*Replace userID value with whichever userID value should be viewed*/

// STUDENT, ADMIN
/*Query to retreive student's login info*/
"SELECT u.userID, u.userType, u.firstName, u.lastName, l.userEmail, l.password FROM\n"+
"user u RIGHT JOIN loginInfo l ON u.userID=l.userID\n"+
"WHERE u.userID=700107173;";
/*Replace userID value with whichever userID value should be viewed*/

// STUDENT, FACULTY, ADMIN (can update anybody\s), RESEARCH STAFF
/*Query to update password*/
"UPDATE loginInfo\n"+
"SET password='newEastbury'\n"+
"WHERE userID=700101657;";
/*Replace userID value with whichever userID value should be viewed*/

// [RESEARCH STAFF]
/*ResearchStaff Query, view grade data*/
"SELECT courseGrade.courseID AS 'CourseID', courseGrade.courseName AS 'Course Name', \n"+
"d.deptName AS 'Department Name', courseGrade.grade AS 'Grade', courseGrade.semYear AS 'Semester' FROM dept d\n"+
"JOIN\n"+
"(SELECT crnGrade.courseID, c.courseName, c.deptID, crnGrade.studentID, crnGrade.grade, crnGrade.semYear FROM course c\n"+
"JOIN"+
"(SELECT sh.studentID, sh.crn, sh.grade, s.courseID, s.semyear FROM studentHistory sh\n"+
"JOIN section s ON sh.crn=s.crn) AS crnGrade\n"+
"ON c.courseID=crnGrade.courseID) AS courseGrade\n"+
"ON d.deptID=courseGrade.deptID\n"+
"ORDER BY Semester ASC;";

// FROM MAIN PAGE
/*Query to retrieve master schedule*/
"(SELECT cWithD.crn AS 'CRN Number', cWithD.courseID AS 'Course ID', cWithD.courseName AS 'Course Title', cWithD.deptName AS 'Dept Name',\n"+
"cWithD.numCredits AS 'Credits', CONCAT(u.lastName,', ',u.firstName) AS 'Instructor', \n"+
"cWithD.roomID AS 'Room', cWithD.semYear AS 'Semester', cWithD.days AS 'Course Days', cWithD.Time AS 'Course Time' FROM user u\n"+
"JOIN\n"+
"	(SELECT cNamed.crn, cNamed.courseID, cNamed.courseName, d.deptName, cNamed.numCredits, cNamed.facultyID, \n"+
"	cNamed.roomID, cNamed.semYear, cNamed.days, cNamed.Time FROM dept d\n"+
"	JOIN\n"+
"	(SELECT courseSched.crn, c.courseID, c.courseName, c.deptID, c.numCredits, courseSched.facultyID, \n"+
"		courseSched.roomID, courseSched.semYear, courseSched.days, courseSched.Time FROM course c\n"+
"		JOIN\n"+
"			(SELECT s.crn, s.courseID, s.facultyID, s.roomID, s.semYear, CONCAT(tSlots1.day,'/',tSlots2.day) AS 'days', tSlots1.Time FROM section s\n"+
"			JOIN\n"+
"			(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n"+
"				CONCAT(TIME_FORMAT(timeTable.periodStart, "%h:%i%p"),' - ',TIME_FORMAT(timeTable.periodEnd, "%h:%i%p")) AS 'Time' FROM\n"+
"					(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n"+
"					JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n"+
"					JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n"+
"					JOIN day d ON tsd.dayID=d.dayID\n"+
"					JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1\n"+
"				ON s.timeslot1=tSlots1.TSID\n"+
"			JOIN\n"+
"				(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n"+
"				CONCAT(TIME_FORMAT(timeTable.periodStart, "%h:%i%p"),' - ',TIME_FORMAT(timeTable.periodEnd, "%h:%i%p")) AS 'Time' FROM\n"+
"					(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n"+
"					JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n"+
"					JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n"+
"					JOIN day d ON tsd.dayID=d.dayID\n"+
"					JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n"+
"				ON s.timeslot2=tSlots2.TSID\n"+
"			WHERE s.semYear='S2022') AS courseSched\n"+
"		ON c.courseID=courseSched.courseID) AS cNamed\n"+
"	ON d.deptID=cNamed.deptID) AS cWithD\n"+
"ON cWithD.facultyID=u.userID)\n"+
"ORDER BY cWithD.deptName;";

// [MAIN PAGE]
/*Query to view the school's entire Course Catalog*/
"SELECT d.deptName, c.courseID, c.courseName FROM dept d\n"+
"JOIN\n"+
"course c ON d.deptID=c.deptID\n"+
"ORDER BY d.deptName ASC;";

// [LUXURY]
/*Query to view the school's Course Catalog by a specific department*/
"SELECT catalog.courseName AS 'Course Name', catalog.courseID AS 'Course ID', catalog.deptName AS 'Dept Name' FROM \n"+
"(SELECT d.deptID, d.deptName, c.courseID, c.courseName FROM dept d\n"+
"JOIN\n"+
"course c ON d.deptID=c.deptID\n"+
"WHERE d.deptID='D01' \n"+
") AS catalog;";
/*Department ID gets inserted between ''*/

// [LUXURY]
/*Query to search for course prerequisites*/
"SELECT DISTINCT courses.courseID AS 'Course ID', courses.courseName AS 'Course Name',\n"+
"preReqs.coursePreReq AS 'PreReq ID', preReqs.courseName AS 'PreRequisite Course Name', \n"+
"courses.gradeRequired AS 'Minimum Grade' FROM\n"+
"(SELECT pr1.coursePreReq, c.courseName FROM course c\n"+
"JOIN coursePreReq pr1 ON c.courseID=pr1.coursepreReq) AS preReqs\n"+
"JOIN\n"+
"(SELECT pr2.courseID, c.courseName, pr2.gradeRequired, pr2.coursePreReq FROM course c\n"+
"JOIN coursePreReq pr2 ON c.courseID=pr2.courseID) AS courses\n"+
"ON preReqs.coursePreReq=courses.coursePreReq\n"+
"WHERE courses.courseID='BE201' \n"+
"ORDER BY courses.courseID ASC;";
/*Optional WHERE clause for individual classes, remove line for complete PreReq list*/

// [STUDENT, FACULTY, ADMIN]
/*Query to retrieve student's history*/
"SELECT instructor.studentID AS 'Student ID', instructor.crn AS 'CRN', instructor.courseID AS 'Course ID', \n"+
"instructor.courseName AS 'Course Name', instructor.semYear AS 'Semester', \n"+
"CONCAT(u.lastName,', ',u.firstName) AS 'Professor', instructor.grade AS 'Instructor' FROM user u\n"+
"JOIN\n"+
"(SELECT f.facultyID, courseHistory.studentID, courseHistory.courseID, courseHistory.courseName, courseHistory.crn, courseHistory.semYear, courseHistory.grade FROM faculty f\n"+
"JOIN\n"+
"(SELECT history.studentID, course.courseID, course.courseName, history.crn, history.semYear, history.grade, history.facultyID FROM course\n"+
"JOIN\n"+
"(SELECT sh.studentID, sh.crn, s.courseID, sh.semYear, sh.grade, s.facultyID FROM studentHistory sh\n"+
"JOIN \n"+
"section s ON sh.crn=s.crn) AS history\n"+
"ON history.courseID=course.courseID) AS courseHistory\n"+
"ON courseHistory.facultyID=f.facultyID) AS instructor\n"+
"ON u.userID=instructor.facultyID\n"+
"WHERE studentID='700100828'  \n"+
"ORDER BY studentID ASC;";
/*Student's ID number gets input on this line, remove WHERE clause to get entire table (Admin Version)*/

// [STUDENT, FACULTY, ADMIN]
/*Query to retireve a student's holds*/
"SELECT sHolds.studentID AS 'Student ID', sHolds.studentName AS 'Student Name', \n"+
"h.holdDesc AS 'Description', h.holdType AS 'Type of Hold', sHolds.dateAdded AS 'Date Applied' FROM hold h\n"+
"JOIN\n"+
"(SELECT sh.holdName, sh.DateAdded, studentInfo.studentID, studentInfo.studentName FROM studentHold sh\n"+
"JOIN\n"+
"(SELECT s.studentID, CONCAT(u.lastName,', ',u.firstName) AS studentName FROM user u\n"+
"JOIN student s ON u.userID=s.studentID) AS studentInfo\n"+
"ON studentInfo.studentID=sh.studentID) AS sHolds\n"+
"ON h.holdName=sHolds.holdName\n"+
"WHERE sHolds.studentID='700727715';";
/*Student's ID number gets input on this line, remove WHERE clause to get entire table (Admin Version)*/

// [ADMIN]
/*Admin Query to retrieve full list of Faculty who are an Advisor*/
"SELECT adv.facultyID as 'Faculty ID', CONCAT(adv.firstName,' ',adv.lastName) AS 'Advisor Name', adv.phoneNumber AS 'Advisor Phone', l.userEmail AS 'Advisor Email' FROM loginInfo l\n"+
"RIGHT JOIN\n"+
"(SELECT facID.facultyID, u.firstName, u.lastName, u.phoneNumber FROM user u\n"+
"	JOIN\n"+
"	(SELECT facultyID FROM advisor) AS facID\n"+
"	WHERE facID.facultyID=u.userID) AS adv\n"+
"ON adv.facultyID=l.userID;";

// [STUDENT]
/*Student Query to retrieve info of a individual Student's assigned Faculty Advisor*/
"SELECT CONCAT(adv.firstName,' ',adv.lastName) AS 'Advisor Name', adv.phoneNumber AS 'Advisor Phone', l.userEmail AS 'Advisor Email' FROM loginInfo l\n"+
"RIGHT JOIN\n"+
"(SELECT facID.facultyID, u.firstName, u.lastName, u.phoneNumber FROM user u\n"+
"	JOIN\n"+
"	(SELECT facultyID FROM advisor\n"+
"		WHERE studentID=700903061) AS facID \n"+
"	WHERE facID.facultyID=u.userID) AS adv\n"+
"ON adv.facultyID=l.userID;";
/*student's ID number gets input on this line, the one with facID*/

// [ADMIN]
/*Admin Query to retrieve a full list of students who have an advisor*/
"SELECT students.studentID AS 'Student ID', CONCAT(students.LastName,', ',students.firstName) AS 'Student Name',\n"+
"students.phoneNumber AS 'Student Phone', l.userEmail AS 'Student Email' FROM loginInfo l\n"+
"RIGHT JOIN\n"+
"(SELECT facList.studentID, u.firstName, u.lastName, u.phoneNumber FROM user u\n"+
"	JOIN\n"+
"	(SELECT studentID FROM advisor) AS facList\n"+
"	WHERE facList.studentID=u.userID) AS students\n"+
"ON students.studentID=l.userID\n"+
"ORDER BY students.lastName ASC;";

// [FACULTY]
/*Query to retrieve a list of Students a Faculty is Advising*/
"SELECT students.studentID AS 'Student ID', CONCAT(students.LastName,', ',students.firstName) AS 'Student Name',\n"+
"students.phoneNumber AS 'Student Phone', l.userEmail AS 'Student Email' FROM loginInfo l\n"+
"RIGHT JOIN\n"+
"(SELECT facList.studentID, u.firstName, u.lastName, u.phoneNumber FROM user u\n"+
"	JOIN\n"+
"	(SELECT studentID FROM advisor\n"+
"		WHERE facultyID=900854299) AS facList\n"+
"	WHERE facList.studentID=u.userID) AS students\n"+
"ON students.studentID=l.userID\n"+
"ORDER BY students.lastName ASC;";
/*faculty's ID number gets input on this line*/