"(SELECT cWithD.crn AS 'CRN Number', cWithD.courseID AS 'Course ID', cWithD.courseName AS 'Course Title', cWithD.deptName AS 'Dept Name',\n"+
"cWithD.numCredits AS 'Credits', CONCAT(u.lastName,', ',u.firstName) AS 'Instructor', \n"+
"cWithD.roomID AS 'Room', cWithD.semYear AS 'Semester', cWithD.days AS 'Course Days', cWithD.Time AS 'Course Time' FROM user u\n"+
"JOIN\n"+
	"(SELECT cNamed.crn, cNamed.courseID, cNamed.courseName, d.deptName, cNamed.numCredits, cNamed.facultyID, \n"+
	"cNamed.roomID, cNamed.semYear, cNamed.days, cNamed.Time FROM dept d\n"+
	"JOIN\n"+
	"(SELECT courseSched.crn, c.courseID, c.courseName, c.deptID, c.numCredits, courseSched.facultyID, \n"+
		"courseSched.roomID, courseSched.semYear, courseSched.days, courseSched.Time FROM course c\n"+
		"JOIN\n"+
			"(SELECT s.crn, s.courseID, s.facultyID, s.roomID, s.semYear, CONCAT(tSlots1.day,'/',tSlots2.day) AS 'days', tSlots1.Time FROM section s\n"+
			"JOIN\n"+
			"(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n"+
				"CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n"+
					"(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n"+
					"JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n"+
					"JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n"+
					"JOIN day d ON tsd.dayID=d.dayID\n"+
					"JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots1\n"+
				"ON s.timeslot1=tSlots1.TSID\n"+
			"JOIN\n"+
				"(SELECT timeTable.timeSlotID AS 'TSID', timeTable.weekDay AS day, \n"+
				"CONCAT(TIME_FORMAT(timeTable.periodStart, '%h:%i%p'),' - ',TIME_FORMAT(timeTable.periodEnd, '%h:%i%p')) AS 'Time' FROM\n"+
					"(SELECT ts.timeSlotID, ts.dayID, ts.periodID, d.weekday, p.periodStart, p.periodEnd FROM timeSlot ts\n"+
					"JOIN tsDay tsd ON ts.timeSlotID=tsd.timeSlotID\n"+
					"JOIN tsPeriod tsp ON ts.timeslotID=tsp.timeSlotID\n"+
					"JOIN day d ON tsd.dayID=d.dayID\n"+
					"JOIN period p ON tsp.periodID=p.periodID) AS timeTable) as tSlots2\n"+
				"ON s.timeslot2=tSlots2.TSID\n"+
			"WHERE s.semYear='S2022') AS courseSched\n"+
		"ON c.courseID=courseSched.courseID) AS cNamed\n"+
	"ON d.deptID=cNamed.deptID) AS cWithD\n"+
"ON cWithD.facultyID=u.userID)\n"+
"ORDER BY cWithD.deptName;"