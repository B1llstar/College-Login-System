module.exports = {

    // [FACULTY] Retreive student's user info
    // AUTO-FILL INPUT: userID for current user
    // This is the query that should be used to display info on the FACULTY landing page
    getFacultyLoginInfo:
    "SELECT u.userID, u.userType, u.firstName, u.lastName, l.userEmail, l.password FROM\n" +
    "user u RIGHT JOIN loginInfo l ON u.userID=l.userID WHERE u.userID=?;",

    // [FACULTY] Retrieve a list of Students Advisees assigned to the Faculty user
    // AUTO-FILL: facultyID for current user
    viewAdvisees:
    "SELECT students.studentID AS 'Student ID', CONCAT(students.LastName,', ',students.firstName) AS 'Student Name',\n" +
    "students.phoneNumber AS 'Student Phone', l.userEmail AS 'Student Email' FROM loginInfo l\n" +
    "RIGHT JOIN (SELECT facList.studentID, u.firstName, u.lastName, u.phoneNumber FROM user u\n" +
    "JOIN (SELECT studentID FROM advisor WHERE facultyID='?') AS facList\n" +
    "WHERE facList.studentID=u.userID) AS students ON students.studentID=l.userID\n" +
    "ORDER BY students.lastName ASC;",

    // [FACULTY] View courses assigned to as Instructor
    // AUTO-FILL INPUT: facultyID for current user
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
    "ON s.timeslot1=tSlots1.TSID JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n" +
    "ON s.timeslot2=tSlots2.TSID) AS list ON list.courseID=c.courseID WHERE (list.semYear='F2021' OR list.semYear='S2022') \n" +
    "AND facultyID='?' ORDER BY semYear;",


    // [FACULTY] Record Attendance
    // USER INPUT: All values required, query must fail if any are missing
    // Parameters: studentID- 9 digit INT, CRN-5 digit INT, eNum- ('Yes' or 'No'), date- YYYY-MM-DD format
    recordAttendance:
    "INSERT INTO attendance(studentID, crn, isPresent, date) VALUES ('?', '?', '?' '?');",

    //--------------SHARED QUERIES-------------------


    // [STUDENT, FACULTY, ADMIN] Query to update password
    // USER INPUTS: password
    // AUTO-FILL: userID for current user
    updatePassword:
    "UPDATE loginInfo SET password='?' WHERE userID=?;",

    // [STUDENT, FACULTY, ADMIN] Query to retrieve student's history*/
    // USER INPUT: studentID
    getStudentHistory:
    "SELECT instructor.studentID AS 'Student ID', instructor.crn AS 'CRN', instructor.courseID AS 'Course ID', \n" +
    "instructor.courseName AS 'Course Name', instructor.semYear AS 'Semester', \n" +
    "CONCAT(u.lastName,', ',u.firstName) AS 'Professor', instructor.grade AS 'Instructor' FROM user u JOIN\n" +
    "(SELECT f.facultyID, courseHistory.studentID, courseHistory.courseID, courseHistory.courseName, courseHistory.crn, courseHistory.semYear, courseHistory.grade FROM faculty f\n" +
    "JOIN (SELECT history.studentID, course.courseID, course.courseName, history.crn, history.semYear, history.grade, history.facultyID FROM course\n" +
    "JOIN (SELECT sh.studentID, sh.crn, s.courseID, sh.semYear, sh.grade, s.facultyID FROM studentHistory sh JOIN \n" +
    "section s ON sh.crn=s.crn) AS history ON history.courseID=course.courseID) AS courseHistory\n" +
    "ON courseHistory.facultyID=f.facultyID) AS instructor ON u.userID=instructor.facultyID\n" +
    "WHERE studentID='?' ORDER BY studentID ASC;",

    // [STUDENT, FACULTY, ADMIN] Query to retireve a student's holds*/
    // USER INPUT: studentID (for Faculty, Admin)
    viewHolds:
    "SELECT sHolds.studentID AS 'Student ID', sHolds.studentName AS 'Student Name', \n" +
    "h.holdDesc AS 'Description', h.holdType AS 'Type of Hold', sHolds.dateAdded AS 'Date Applied' FROM hold h\n" +
    "JOIN (SELECT sh.holdName, sh.DateAdded, studentInfo.studentID, studentInfo.studentName FROM studentHold sh\n" +
    "JOIN (SELECT s.studentID, CONCAT(u.lastName,', ',u.firstName) AS studentName FROM user u\n" +
    "JOIN student s ON u.userID=s.studentID) AS studentInfo ON studentInfo.studentID=sh.studentID) AS sHolds\n" +
    "ON h.holdName=sHolds.holdName WHERE sHolds.studentID='?';",

    // [STUDENT, FACULTY, ADMIN] View Student's registration for next semester*/
    // USER INPUT: studentID (for Faculty, Admin)
    viewRegistration:
    "SELECT courseHist.*, e.grade AS 'Current Grade', DATE_FORMAT(e.dateEnrolled, '%m/%d/%Y') AS 'Date Enrolled' FROM enrollment e \n"+
    "JOIN (SELECT list.crn AS 'CRN', list.courseID AS 'Course ID', c.courseName AS 'Course Name', list.roomID As 'Room',  \n"+
    "list.faculty AS 'Instructor', list.semYear as 'Semester', list.Days, list.Time FROM course c\n"+
    "JOIN (SELECT s.crn, s.courseID, s.roomID, s.semYear, s.facultyID, CONCAT(u.lastName, ', ', u.firstName) AS 'faculty', \n"+
    "CONCAT(SUBSTRING(tSlots1.day,1,1),'/',SUBSTRING(tSlots2.day,1,1)) as Days, tSlots2.Time FROM section s\n"+
    "JOIN user u ON s.facultyID=u.userID JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n"+
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n"+
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n"+
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID JOIN day d ON tsd.dayID=d.dayID\n"+
    "JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1 ON s.timeslot1=tSlots1.TSID JOIN\n"+
    "(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day,\n"+
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n"+
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n"+
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n"+
    "JOIN day d ON tsd.dayID=d.dayID	JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n"+
    "ON s.timeslot2=tSlots2.TSID) AS list ON list.courseID=c.courseID ORDER BY list.semYear DESC, list.courseID) AS courseHist\n"+
    "ON e.crn=courseHist.crn WHERE courseHist.Semester='S2022' AND studentID='700217149';",

    // [STUDENT, FACULTY, ADMIN] Course Search Query
    // USER INPUT: Multiple field inputs possible, WHERE clause in last line get 
    // replaced depending on field, can be more than one by using AND
    // VARIABLE VALUES:
    // finalList.crn = '?';
    // finalList.courseID = '?';
    // finalList.courseName = '%?%'; (percent symbols are wildcards, this returns anything containing whats between them
    // finalList.Instructor = '%?%'; */
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
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as times1\n" +
    "ON courseList.timeSlot1=times1.TSID JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as times2\n" +
    "ON courseList.timeslot2=times2.TSID) AS finalList WHERE finalList.crn='?';",

    // [STUDENT, FACULTY, ADMIN] View student transcript
    // USER INPUT: studentID
    getTranscript:
    "SELECT SUBSTRING(c1.courseID,1,2) AS 'Subject', SUBSTRING(c1.courseID,3,3) AS 'Course', c1.courseName AS 'Title', sh2.grade AS 'Grade', \n" +
    "c1.numCredits AS 'Credit Hours', sh2.semYear AS 'Term' FROM course c1\n" +
    "JOIN (SELECT sh1.studentID, sh1.crn, sh1.semYear, sec1.courseID, sh1.grade FROM studentHistory sh1\n" +
    "JOIN section sec1 ON sh1.crn=sec1.crn) AS sh2 ON c1.courseID=sh2.courseID\n" +
    "WHERE sh2.studentID='?' ORDER BY SUBSTRING(sh2.semYear,2,4) ASC;",
    /* Amir gave me this algorithm to convert a grade letter into a GPA, which we should display somewhere on the Transcript page:
    arrayOfGradeLatters= ["A","A-","B+","B","B-","C+","C","C-","D+","D","F"];
    arrayOfGradeValues= [4.0,3.7,3.3,3.0,2.7,2.3,2.0,1.7,1.3,1.0,0.0];
    for(i=0; i< len(grades);i++){
        gradeindex = array_search(grades[i], arrayOfGradeLatters);
        gradeadder += floatval($arrayOfGradeValues[$gradeindex]);
        GPA = floatval(gradeadder/len(grades));
    } Then you'd return GPA of course */


    // [STUDENT, FACULTY, ADMIN] Degree Audit - Two Part Query, first gets % complete, second gets courses
    // USER INPUT: studentID
    getDegreeAuditCoursesTakenP1:
    "SELECT COUNT(*) AS 'Courses Completed', total.total AS 'Courses Needed', \n" +
    "CONCAT(FORMAT((COUNT(*)/total.total)*100,2),'%') AS 'Percent Complete' FROM studentHistory sh\n" +
    "JOIN (SELECT sm.studentID, sm.majorID, COUNT(*) AS 'total' FROM studentMajor sm\n" +
    "JOIN majorCourse mc ON sm.majorID=mc.majorID\n" +
    "WHERE sm.studentID='?') AS total ON sh.studentID=total.studentID;",
    
    getDegreeAuditCoursesTakenP2:
    "SELECT c1.courseID AS 'Course', c1.courseName AS 'Title', sh2.grade AS 'Grade', \n" +
    "c1.numCredits AS 'Credits', sh2.semYear AS 'Term' FROM course c1\n" +
    "JOIN (SELECT sh1.studentID, sh1.crn, sh1.semYear, sec1.courseID, sh1.grade FROM studentHistory sh1\n" +
    "JOIN section sec1 ON sh1.crn=sec1.crn) AS sh2 ON c1.courseID=sh2.courseID\n" +
    "WHERE sh2.studentID='?' ORDER BY SUBSTRING(sh2.semYear,2,4) ASC;",


    // [FACULTY, ADMIN] Access a Student's schedule
    // USER INPUT: studentID
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
    "ON studentSet.studentID=u2.userID) AS final WHERE final.studentID='?';",
    
}