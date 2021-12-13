import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CourseMgmtIcon from '@mui/icons-material/FormatListBulleted';
import AdvisorIcon from '@mui/icons-material/SupervisorAccount';
import ViewExams from '@mui/icons-material/CalendarTodaySharp';
import DropRequests from '@mui/icons-material/AdminPanelSettingsSharp';
import RecordAttendance from '@mui/icons-material/RadioButtonCheckedSharp';
import HoldsIcon from '@mui/icons-material/StopCircle';
import TranscriptIcon from '@mui/icons-material/HistoryEdu';
import StudentSchedule from '@mui/icons-material/ListAltSharp';
import DegAuditIcon from '@mui/icons-material/School';
import Logout from '@mui/icons-material/LogoutSharp';


export const SidebarData = [
    {
        title: " Home",
        icon: <HomeIcon />,
        link: "/home"
    },

    {
        title: "View Courses",
        icon: <CourseMgmtIcon />,
        link: "/viewCourses"
    },

    {
        title: "View Advisees",
        icon: <AdvisorIcon />,
        link: "/advisor"
    },

    {
        title: "View Exam Schedules",
        icon: <ViewExams />,
        link: "/examSchedules"
    },

    {
        title: "View Drop Requests",
        icon: <DropRequests />,
        link: "/viewDropRequests"
    },

    {
        title: "Record Attendance",
        icon: <RecordAttendance />,
        link: "/recordAttendance"
    },

    {
        title: "Access a Student Transcript",
        icon: <TranscriptIcon />,
        link: "/accessTranscript"
    },

    {
        title: "Access a Student Schedule",
        icon: <StudentSchedule />,
        link: "/accessStudentSchedule"
    },

    {
        title: "Access a Student Registration",
        icon: <DegAuditIcon />,
        link: "/accessStudentReg"
    },

    {
        title: "View Student Holds",
        icon: <HoldsIcon />,
        link: "/holds"
    },

    {
        title: "Logout",
        icon: <Logout />,
        link: "/logout"
    }
];