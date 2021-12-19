import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ViewUsers from '@mui/icons-material/GroupSharp';
import CreateUsers from '@mui/icons-material/GroupAddSharp';
import ModifyUsers from '@mui/icons-material/ManageAccountsSharp';
import ViewCourses from '@mui/icons-material/ListAltSharp';
import CreateCourse from '@mui/icons-material/ListAltSharp';
import ModifyCourse from '@mui/icons-material/EditSharp';
import DeleteCourse from '@mui/icons-material/PlaylistRemoveSharp';
import AccessReg from '@mui/icons-material/AppRegistrationSharp';
import StudentReg from '@mui/icons-material/HowToRegSharp';
import DropCourse from '@mui/icons-material/DeleteSweepSharp';
import HoldsIcon from '@mui/icons-material/StopCircle';
import TranscriptIcon from '@mui/icons-material/HistoryEdu';
import DegAuditIcon from '@mui/icons-material/School';
import AdvisorIcon from '@mui/icons-material/SupervisorAccount';
import ViewMasterSchedule from '@mui/icons-material/AssignmentSharp';
import ModifyExams from '@mui/icons-material/PostAddSharp';
import DropRequests from '@mui/icons-material/AdminPanelSettingsSharp';
import Logout from '@mui/icons-material/LogoutSharp';

export const SidebarData = [
    {
        title: " Home",
        icon: <HomeIcon />,
        link: "/home"
    },

    {
        title: "View All Users",
        icon: <ViewUsers />,
        link: "/viewUsers"
    },

    {
        title: "Create a User",
        icon: <CreateUsers />,
        link: "/createUser"
    },

    {
        title: "Modify a User",
        icon: <ModifyUsers />,
        link: "/modifyUser"
    },

    {
        title: "View All Courses",
        icon: <ViewCourses />,
        link: "/viewCourses"
    },

    {
        title: "Create a Course",
        icon: <CreateCourse />,
        link: "/createCourse"
    },

    {
        title: "Modify a Course",
        icon: <ModifyCourse />,
        link: "/modifyCourses"
    },

    {
        title: "Delete a Course",
        icon: <DeleteCourse />,
        link: "/deleteCourses"
    },

    {
        title: "Access a Student Registration",
        icon: <AccessReg />,
        link: "/accessStudentReg"
    },

    {
        title: "Register Student for a Course",
        icon: <StudentReg />,
        link: "/registerCourse"
    },

    {
        title: "Drop a Student Course",
        icon: <DropCourse />,
        link: "/dropCourse"
    },

    {
        title: "View Student Holds",
        icon: <HoldsIcon />,
        link: "/holds"
    },

    {
        title: "View Student Transcript",
        icon: <TranscriptIcon />,
        link: "/transcript"
    },

    {
        title: "View Student Degree Audit",
        icon: <DegAuditIcon />,
        link: "/degAudit"
    },

    {
        title: "View Advisors/Advisees",
        icon: <AdvisorIcon />,
        link: "/advisor"
    },

    {
        title: "Modify Master Schedule",
        icon: <ViewMasterSchedule />,
        link: "/Modify Master Schedule"
    },

    {
        title: "Modify Exam Schedules",
        icon: <ModifyExams />,
        link: "/modifyExamSchedules"
    },

    {
        title: "Manage Drop Requests",
        icon: <DropRequests />,
        link: "/viewDropRequests"
    },

    {
        title: "Logout",
        icon: <Logout />,
        link: "/logout"
    }
];