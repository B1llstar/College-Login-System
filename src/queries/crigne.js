/*Select DB for use*/
"USE newEastburyAWS;";

/*Admin Query, view all user info*/
"SELECT u.userID, u.userType, u.firstName, u.lastName, u.phoneNumber, u.DOB, u.street, u.city, u.state, u.zip, l.userEmail FROM user u"+
"JOIN loginInfo l ON u.userID=l.userID;";

/*Admin Query, view a specific user's info*/
"SELECT u.userID, u.userType, u.firstName, u.lastName, u.phoneNumber, u.DOB, u.street, u.city, u.state, u.zip, l.userEmail FROM user u"+
"RIGHT JOIN loginInfo l ON u.userID=l.userID"+
"WHERE u.userID=700107173; "+
/*Replace userID value with whichever userID value should be viewed*/

/*Query to retreive student's login info*/
"SELECT u.userID, u.userType, u.firstName, u.lastName, l.userEmail, l.password FROM"+
"user u RIGHT JOIN loginInfo l ON u.userID=l.userID"+
"WHERE u.userID=700107173; "+
/*Replace userID value with whichever userID value should be viewed*/

/*Query to update password*/
"UPDATE loginInfo"+
"SET password='newEastbury'"+
"WHERE userID=700101657; "+
/*Replace userID value with whichever userID value should be viewed*/

/*ResearchStaff Query, view grade data*/
"SELECT courseGrade.courseID AS 'CourseID', courseGrade.courseName AS 'Course Name', "+
"d.deptName AS 'Department Name', courseGrade.grade AS 'Grade', courseGrade.semYear AS 'Semester' FROM dept d"+
"JOIN"+
"(SELECT crnGrade.courseID, c.courseName, c.deptID, crnGrade.studentID, crnGrade.grade, crnGrade.semYear FROM course c"+
"JOIN"+
"(SELECT sh.studentID, sh.crn, sh.grade, s.courseID, s.semyear FROM studentHistory sh"+
"JOIN section s ON sh.crn=s.crn) AS crnGrade"+
"ON c.courseID=crnGrade.courseID) AS courseGrade"+
"ON d.deptID=courseGrade.deptID"+
"ORDER BY Semester ASC;";


/*Query to retrieve master schedule*/
"(SELECT cWithD.crn AS 'CRN Number', cWithD.courseID AS 'Course ID', cWithD.courseName AS 'Course Title', cWithD.deptName AS 'Dept Name',"+
"cWithD.numCredits AS 'Credits', CONCAT(u.lastName,', ',u.firstName) AS 'Instructor', "+
"cWithD.roomID AS 'Room', cWithD.semYear AS 'Semester', cWithD.days AS 'Course Days', cWithD.Time AS 'Course Time' FROM user u"+
"JOIN"+
"	(SELECT cNamed.crn, cNamed.courseID, cNamed.courseName, d.deptName, cNamed.numCredits, cNamed.facultyID, "+
"	cNamed.roomID, cNamed.semYear, cNamed.days, cNamed.Time FROM dept d"+
"	JOIN"+
"	(SELECT courseSched.crn, c.courseID, c.courseName, c.deptID, c.numCredits, courseSched.facultyID, "+
"		courseSched.roomID, courseSched.semYear, courseSched.days, courseSched.Time FROM course c"+
"		JOIN"+
"			(SELECT s.crn, s.courseID, s.facultyID, s.roomID, s.semYear, CONCAT(tSlots1.day,'/',tSlots2.day) AS 'days', tSlots1.Time FROM section s"+
"			JOIN"+
"			(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, "+
"				CONCAT(TIME_FORMAT(timeTable.periodStart, "%h:%i%p"),' - ',TIME_FORMAT(timeTable.periodEnd, "%h:%i%p")) AS 'Time' FROM"+
"					(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts"+
"					JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID"+
"					JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID"+
"					JOIN day d ON tsd.dayID=d.dayID"+
"					JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1"+
"				ON s.timeslot1=tSlots1.TSID"+
"			JOIN"+
"				(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, "+
"				CONCAT(TIME_FORMAT(timeTable.periodStart, "%h:%i%p"),' - ',TIME_FORMAT(timeTable.periodEnd, "%h:%i%p")) AS 'Time' FROM"+
"					(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts"+
"					JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID"+
"					JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID"+
"					JOIN day d ON tsd.dayID=d.dayID"+
"					JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2"+
"				ON s.timeslot2=tSlots2.TSID"+
"			WHERE s.semYear='S2022') AS courseSched"+
"		ON c.courseID=courseSched.courseID) AS cNamed"+
"	ON d.deptID=cNamed.deptID) AS cWithD"+
"ON cWithD.facultyID=u.userID)"+
"ORDER BY cWithD.deptName;";


/*Query to view the school's entire Course Catalog*/
"SELECT d.deptName, c.courseID, c.courseName FROM dept d"+
"JOIN"+
"course c ON d.deptID=c.deptID"+
"ORDER BY d.deptName ASC;";

"SELECT * FROM course;";


/*Query to view the school's Course Catalog by a specific department*/
"SELECT catalog.courseName AS 'Course Name', catalog.courseID AS 'Course ID', catalog.deptName AS 'Dept Name' FROM "+
"(SELECT d.deptID, d.deptName, c.courseID, c.courseName FROM dept d"+
"JOIN"+
"course c ON d.deptID=c.deptID"+
"WHERE d.deptID='D01' "+
") AS catalog;";
/*Department ID gets inserted between ''*/

/*Query to search for course prerequisites*/
"SELECT DISTINCT courses.courseID AS 'Course ID', courses.courseName AS 'Course Name',"+
"preReqs.coursePreReq AS 'PreReq ID', preReqs.courseName AS 'PreRequisite Course Name', "+
"courses.gradeRequired AS 'Minimum Grade' FROM"+
"(SELECT pr1.coursePreReq, c.courseName FROM course c"+
"JOIN coursePreReq pr1 ON c.courseID=pr1.coursepreReq) AS preReqs"+
"JOIN"+
"(SELECT pr2.courseID, c.courseName, pr2.gradeRequired, pr2.coursePreReq FROM course c"+
"JOIN coursePreReq pr2 ON c.courseID=pr2.courseID) AS courses"+
"ON preReqs.coursePreReq=courses.coursePreReq"+
"WHERE courses.courseID='BE201' "+
"ORDER BY courses.courseID ASC;";
/*Optional WHERE clause for individual classes, remove line for complete PreReq list*/


/*Query to retrieve student's history*/
"SELECT instructor.studentID AS 'Student ID', instructor.crn AS 'CRN', instructor.courseID AS 'Course ID', "+
"instructor.courseName AS 'Course Name', instructor.semYear AS 'Semester', "+
"CONCAT(u.lastName,', ',u.firstName) AS 'Professor', instructor.grade AS 'Instructor' FROM user u"+
"JOIN"+
"(SELECT f.facultyID, courseHistory.studentID, courseHistory.courseID, courseHistory.courseName, courseHistory.crn, courseHistory.semYear, courseHistory.grade FROM faculty f"+
"JOIN"+
"(SELECT history.studentID, course.courseID, course.courseName, history.crn, history.semYear, history.grade, history.facultyID FROM course"+
"JOIN"+
"(SELECT sh.studentID, sh.crn, s.courseID, sh.semYear, sh.grade, s.facultyID FROM studentHistory sh"+
"JOIN "+
"section s ON sh.crn=s.crn) AS history"+
"ON history.courseID=course.courseID) AS courseHistory"+
"ON courseHistory.facultyID=f.facultyID) AS instructor"+
"ON u.userID=instructor.facultyID"+
"WHERE studentID='700100828'  "+
"ORDER BY studentID ASC;";
/*Student's ID number gets input on this line, remove WHERE clause to get entire table (Admin Version)*/


/*Query to retireve a student's holds*/
"SELECT sHolds.studentID AS 'Student ID', sHolds.studentName AS 'Student Name', "+
"h.holdDesc AS 'Description', h.holdType AS 'Type of Hold', sHolds.dateAdded AS 'Date Applied' FROM hold h"+
"JOIN"+
"(SELECT sh.holdName, sh.DateAdded, studentInfo.studentID, studentInfo.studentName FROM studentHold sh"+
"JOIN"+
"(SELECT s.studentID, CONCAT(u.lastName,', ',u.firstName) AS studentName FROM user u"+
"JOIN student s ON u.userID=s.studentID) AS studentInfo"+
"ON studentInfo.studentID=sh.studentID) AS sHolds"+
"ON h.holdName=sHolds.holdName"+
"WHERE sHolds.studentID='700727715';";
/*Student's ID number gets input on this line, remove WHERE clause to get entire table (Admin Version)*/

/*Admin Query to retrieve full list of Faculty who are an Advisor*/
"SELECT adv.facultyID as 'Faculty ID', CONCAT(adv.firstName,' ',adv.lastName) AS 'Advisor Name', adv.phoneNumber AS 'Advisor Phone', l.userEmail AS 'Advisor Email' FROM loginInfo l"+
"RIGHT JOIN"+
"(SELECT facID.facultyID, u.firstName, u.lastName, u.phoneNumber FROM user u"+
"	JOIN"+
"	(SELECT facultyID FROM advisor) AS facID"+
"	WHERE facID.facultyID=u.userID) AS adv"+
"ON adv.facultyID=l.userID;";


/*Student Query to retrieve info of a individual Student's assigned Faculty Advisor*/
"SELECT CONCAT(adv.firstName,' ',adv.lastName) AS 'Advisor Name', adv.phoneNumber AS 'Advisor Phone', l.userEmail AS 'Advisor Email' FROM loginInfo l"+
"RIGHT JOIN"+
"(SELECT facID.facultyID, u.firstName, u.lastName, u.phoneNumber FROM user u"+
"	JOIN"+
"	(SELECT facultyID FROM advisor"+
"		WHERE studentID=700903061) AS facID "+
"	WHERE facID.facultyID=u.userID) AS adv"+
"ON adv.facultyID=l.userID;";
/*student's ID number gets input on this line, the one with facID*/

/*Admin Query to retrieve a full list of students who have an advisor*/
"SELECT students.studentID AS 'Student ID', CONCAT(students.LastName,', ',students.firstName) AS 'Student Name',"+
"students.phoneNumber AS 'Student Phone', l.userEmail AS 'Student Email' FROM loginInfo l"+
"RIGHT JOIN"+
"(SELECT facList.studentID, u.firstName, u.lastName, u.phoneNumber FROM user u"+
"	JOIN"+
"	(SELECT studentID FROM advisor) AS facList"+
"	WHERE facList.studentID=u.userID) AS students"+
"ON students.studentID=l.userID"+
"ORDER BY students.lastName ASC;";


/*Query to retrieve an list of Students a Faculty is Advising*/
"SELECT students.studentID AS 'Student ID', CONCAT(students.LastName,', ',students.firstName) AS 'Student Name',"+
"students.phoneNumber AS 'Student Phone', l.userEmail AS 'Student Email' FROM loginInfo l"+
"RIGHT JOIN"+
"(SELECT facList.studentID, u.firstName, u.lastName, u.phoneNumber FROM user u"+
"	JOIN"+
"	(SELECT studentID FROM advisor"+
"		WHERE facultyID=900854299) AS facList"+
"	WHERE facList.studentID=u.userID) AS students"+
"ON students.studentID=l.userID"+
"ORDER BY students.lastName ASC;";
/*faculty's ID number gets input on this line*/

/*Full timeSlot Table, add a where clause to be more specific - NOT NEEDED AS INDIVIDUAL QUERY, USED AS PART OF MULTIPLE OTHER QUERIES*/
"SELECT timeTable.timeSlotID, timeTable.weekDay AS day, "+
"CONCAT(TIME_FORMAT(timeTable.periodStart, "%h:%i%p"),' - ',TIME_FORMAT(timeTable.periodEnd, "%h:%i%p")) AS 'Time' FROM"+
"	(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts"+
"	JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID"+
"	JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID"+
"	JOIN day d ON tsd.dayID=d.dayID"+
"	JOIN period p ON tsp.periodID=p.periodID) AS timeTable;";
