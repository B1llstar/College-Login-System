module.exports = {

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

    // [STUDENT, FACULTY, ADMIN] Degree Audit - Two Part Query, first gets % complete, second gets courses
    // AUTO-FILL INPUT: studentID for current user
    degreeAuditPt1:
    "SELECT COUNT(*) AS 'Courses Completed', total.total AS 'Courses Needed', \n" +
    "CONCAT(FORMAT((COUNT(*)/total.total)*100,2),'%') AS 'Percent Complete' FROM studentHistory sh\n" +
    "JOIN (SELECT sm.studentID, sm.majorID, COUNT(*) AS 'total' FROM studentMajor sm\n" +
    "JOIN majorCourse mc ON sm.majorID=mc.majorID\n" +
    "WHERE sm.studentID='?') AS total ON sh.studentID=total.studentID;",

    degreeAuditPt2:
    "SELECT c1.courseID AS 'Course', c1.courseName AS 'Title', sh2.grade AS 'Grade', \n" +
    "c1.numCredits AS 'Credits', sh2.semYear AS 'Term' FROM course c1\n" +
    "JOIN (SELECT sh1.studentID, sh1.crn, sh1.semYear, sec1.courseID, sh1.grade FROM studentHistory sh1\n" +
    "JOIN section sec1 ON sh1.crn=sec1.crn) AS sh2 ON c1.courseID=sh2.courseID\n" +
    "WHERE sh2.studentID='?' ORDER BY SUBSTRING(sh2.semYear,2,4) ASC;",

    // [STUDENT, ADMIN] Drop a Course
    // USER INPUT: crn
    // AUTO-FILL INPUT: studentID for current user
    // Parameters: 5 digit CRN
    dropCourse: 
    "DELETE FROM enrollment WHERE studentID='?' AND crn='?';",

    // [STUDENT, ADMIN] Register for a course
    // USER INPUT: crn
    // AUTO-FILL INPUT: studentID for current user
    // Parameters: 5 digit CRN
    registerForCourse:
    "INSERT INTO enrollment(studentID, crn, dateEnrolled, grade) VALUES ('?', '?', CURDATE(), 'IP');",

    // [STUDENT, FACULTY, ADMIN] Query to retrieve student's history*/
    // AUTO-FILL INPUT: studentID for current user
    studentHistory:
    "SELECT instructor.studentID AS 'Student ID', instructor.crn AS 'CRN', instructor.courseID AS 'Course ID', \n" +
    "instructor.courseName AS 'Course Name', instructor.semYear AS 'Semester', \n" +
    "CONCAT(u.lastName,', ',u.firstName) AS 'Professor', instructor.grade AS 'Instructor' FROM user u JOIN\n" +
    "(SELECT f.facultyID, courseHistory.studentID, courseHistory.courseID, courseHistory.courseName, courseHistory.crn, courseHistory.semYear, courseHistory.grade FROM faculty f\n" +
    "JOIN (SELECT history.studentID, course.courseID, course.courseName, history.crn, history.semYear, history.grade, history.facultyID FROM course\n" +
    "JOIN (SELECT sh.studentID, sh.crn, s.courseID, sh.semYear, sh.grade, s.facultyID FROM studentHistory sh JOIN \n" +
    "section s ON sh.crn=s.crn) AS history ON history.courseID=course.courseID) AS courseHistory\n" +
    "ON courseHistory.facultyID=f.facultyID) AS instructor ON u.userID=instructor.facultyID\n" +
    "WHERE studentID='?' ORDER BY studentID ASC;",

    // [STUDENT, FACULTY, ADMIN] View student transcript
    // AUTO-FILL INPUT: studentID for current user
    transcript:
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

    // [STUDENT, FACULTY, ADMIN] Query to update password
    // USER INPUT: password
    // AUTO-FILL INPUT: userID for current user
    updatePassword:
    "UPDATE loginInfo SET password='?' WHERE userID=?;",

    // [STUDENT] View Assigned Faculty Advisor
    // AUTO-FILL INPUT: studentID for current user
    viewAdvisor:
    "SELECT CONCAT(adv.firstName,' ',adv.lastName) AS 'Advisor Name', adv.phoneNumber AS 'Advisor Phone', l.userEmail AS 'Advisor Email' FROM loginInfo l\n" +
    "RIGHT JOIN (SELECT facID.facultyID, u.firstName, u.lastName, u.phoneNumber FROM user u JOIN\n" +
    "(SELECT facultyID FROM advisor WHERE studentID='?') AS facID WHERE facID.facultyID=u.userID) AS adv\n" +
    "ON adv.facultyID=l.userID;",

    // [STUDENT, FACULTY, ADMIN] Query to retireve a student's holds*/
    // AUTO-FILL INPUT: studentID for current user
    viewHolds:
    "SELECT sHolds.studentID AS 'Student ID', sHolds.studentName AS 'Student Name', \n" +
    "h.holdDesc AS 'Description', h.holdType AS 'Type of Hold', DATE_FORMAT(sHolds.dateAdded, '%m/%d/%Y') AS 'Date Added' FROM hold h \n" +
    "JOIN (SELECT sh.holdName, sh.DateAdded, studentInfo.studentID, studentInfo.studentName FROM studentHold sh\n" +
    "JOIN (SELECT s.studentID, CONCAT(u.lastName,', ',u.firstName) AS studentName FROM user u\n" +
    "JOIN student s ON u.userID=s.studentID) AS studentInfo ON studentInfo.studentID=sh.studentID) AS sHolds\n" +
    "ON h.holdName=sHolds.holdName WHERE sHolds.studentID='?';",

    // [STUDENT, FACULTY, ADMIN] View Student's registration for next semester*/
    // AUTO-FILL INPUT: studentID for current user
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
    "ON e.crn=courseHist.crn WHERE courseHist.Semester='S2022' AND studentID='?';",

    // [STUDENT] Retreive student's user info
    // AUTO-FILL INPUT: userID for current user
    // This is the query that should be used to display info on the STUDENT landing page
    viewStudentLoginInfo:
    "SELECT u.userID, u.userType, u.firstName, u.lastName, l.userEmail, l.password FROM\n" +
    "user u RIGHT JOIN loginInfo l ON u.userID=l.userID WHERE u.userID=?;",
    
}