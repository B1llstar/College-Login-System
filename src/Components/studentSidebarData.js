import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ViewRegistration from '@mui/icons-material/FormatListBulleted';
import CourseSearch from '@mui/icons-material/ManageSearchSharp';
import StudentReg from '@mui/icons-material/HowToRegSharp';
import DropCourse from '@mui/icons-material/DeleteSweepSharp';
import HoldsIcon from '@mui/icons-material/StopCircle';
import TranscriptIcon from '@mui/icons-material/HistoryEdu';
import DegAuditIcon from '@mui/icons-material/School';
import AdvisorIcon from '@mui/icons-material/SupervisorAccount';
import Logout from '@mui/icons-material/LogoutSharp';
import getRegistration from '../Pages/studentSections/viewRegistration';

export const SidebarData = [
    {
        title: " Home",
        icon: <HomeIcon />,
        link: "/home"
    },

    {
        title: "View Registration",
        icon: <ViewRegistration />,
        link: "/ViewRegistration",
        onClick: {getRegistration}
    },

    {
        title: "Course Search",
        icon: <CourseSearch />,
        link: "/CourseSearch"
    },

    {
        title: "Register for a Course",
        icon: <StudentReg />,
        link: "/RegisterCourse"
    },

    {
        title: "Drop a Course",
        icon: <DropCourse />,
        link: "/DropCourse"
    },

    {
        title: "View Holds",
        icon: <HoldsIcon />,
        link: "/ViewHolds"
    },

    {
        title: "Unofficial Transcript",
        icon: <TranscriptIcon />,
        link: "/ViewTranscript"
    },

    {
        title: "Degree Audit",
        icon: <DegAuditIcon />,
        link: "/DegreeAudit"
    },

    {
        title: "View Advisor",
        icon: <AdvisorIcon />,
        link: "/ViewAdvisor"
    },

    {
        title: "Logout",
        icon: <Logout />,
        link: "/logout"
    }
];