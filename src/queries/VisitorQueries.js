module.exports = {

    // [VISITOR] View Course Catalog
    viewCourseCatalog:
    "SELECT c.courseName AS 'Course' , c.courseID AS 'Course ID', \n" +
    "d.deptName AS 'Department', c.numCredits AS 'Credits' FROM dept d\n" +
    "JOIN course c ON d.deptID=c.deptID ORDER BY c.courseName ASC;",

    // [VISITOR] View Master Schedule
    getMasterSchedule:
    "(SELECT cWithD.crn AS 'CRN Number', cWithD.courseID AS 'Course ID', cWithD.courseName AS 'Course Title', cWithD.deptName AS 'Dept Name',\n" +
    "cWithD.numCredits AS 'Credits', CONCAT(u.lastName,', ',u.firstName) AS 'Instructor', \n" +
    "cWithD.roomID AS 'Room', cWithD.semYear AS 'Semester', cWithD.days AS 'Course Days', cWithD.Time AS 'Course Time' FROM user u\n" +
    "JOIN (SELECT cNamed.crn, cNamed.courseID, cNamed.courseName, d.deptName, cNamed.numCredits, cNamed.facultyID, \n" +
    "cNamed.roomID, cNamed.semYear, cNamed.days, cNamed.Time FROM dept d JOIN\n" +
    "(SELECT courseSched.crn, c.courseID, c.courseName, c.deptID, c.numCredits, courseSched.facultyID, \n" +
    "courseSched.roomID, courseSched.semYear, courseSched.days, courseSched.Time FROM course c JOIN\n" +
    "(SELECT s.crn, s.courseID, s.facultyID, s.roomID, s.semYear, CONCAT(tSlots1.day,'/',tSlots2.day) AS 'days', tSlots1.Time FROM section s\n" +
    "JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1\n" +
    "ON s.timeslot1=tSlots1.TSID JOIN (SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n" +
    "CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n" +
    "(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n" +
    "JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n" +
    "JOIN day d ON tsd.dayID=d.dayID JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n" +
    "ON s.timeslot2=tSlots2.TSID WHERE s.semYear='S2022') AS courseSched\n" +
    "ON c.courseID=courseSched.courseID) AS cNamed ON d.deptID=cNamed.deptID) AS cWithD\n" +
    "ON cWithD.facultyID=u.userID) ORDER BY cWithD.deptName;",

    // [VISITOR] View Majors and Programs
    // Two Part Query - Both should display on page load
    // with a divider between them, and headers to indicate Major Programs / Minor Programs
    //Query 1 - Major Programs
    majorsAndPrograms:
    "SELECT m.majorName AS 'Major', m.creditsReq AS 'Total Credits', d.deptName AS 'Department' FROM major m\n" +
    "JOIN dept d ON m.deptID=d.deptID;",

    //Query 2 - Minor Programs
    minorsAndPrograms:
    "SELECT m.minorName AS 'Minor', m.creditsReq AS 'Total Credits', d.deptName AS 'Department' FROM minor m\n" +
    "JOIN dept d ON m.deptID=d.deptID;",

}