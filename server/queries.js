var viewRegistrationQuery = ("SELECT instructor.studentID AS 'StudentID', instructor.crn AS 'CRN', instructor.courseID AS 'CourseID', \n"+
"instructor.courseName AS 'CourseName', instructor.semYear AS 'Semester', \n"+
"CONCAT(u.lastName,', ',u.firstName) AS 'Instructor' FROM user u\n"+
"JOIN \n"+
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
"WHERE semYear='S2022' AND studentID=700102001\n;");

var courseSearchQuery = ("SELECT finalList.crn AS 'CRN', finalList.courseID AS 'CourseID', finalList.courseName AS 'CourseName', finalList.roomID AS 'Room', \n"+
"finalList.Instructor, finalList.Days, finalList.Time, finalList.semYear AS 'Semester' FROM\n"+
"(SELECT courseList.*, times1.TSID, CONCAT (substring(times1.day,1,1),'/',substring(times2.day,1,1)) AS 'Days', times1.Time FROM\n"+
"(SELECT S2022.crn, S2022.courseID, S2022.courseName, S2022.roomID,\n"+ 
"CONCAT (u.firstName, ', ', u.lastName) as 'Instructor', S2022.semYear, S2022.timeSlot1, S2022.timeSlot2 FROM user u\n"+
"RIGHT JOIN (SELECT s.crn, s.courseID, catalog.courseName, catalog.deptName, s.roomID, s.facultyID, s.semYear, s.timeSlot1, s.timeSlot2 from section s\n"+
"RIGHT JOIN (SELECT d.deptID, d.deptName, c.courseID, c.courseName FROM dept d\n"+
"JOIN course c ON d.deptID=c.deptID) AS catalog ON s.courseID=catalog.courseID\n"+
"WHERE s.semYear='S2022') AS S2022 ON u.userID=S2022.facultyID) AS courseList\n"+
"LEFT JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n"+
"CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n"+
"(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n"+
"JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n"+
"JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n"+
"JOIN day d ON tsd.dayID=d.dayID\n"+
"JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as times1\n"+
"ON courseList.timeSlot1=times1.TSID\n"+
"JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n"+
"CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n"+
"(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n"+
"JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n"+
"JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n"+
"JOIN day d ON tsd.dayID=d.dayID\n"+
"JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as times2\n"+
"ON courseList.timeslot2=times2.TSID) AS finalList ");

module.exports = {viewRegistrationQuery, courseSearchQuery};