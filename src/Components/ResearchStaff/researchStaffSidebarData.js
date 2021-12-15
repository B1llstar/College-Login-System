import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ViewCourses from "@mui/icons-material/ListAltSharp";
import ViewExams from "@mui/icons-material/CalendarTodaySharp";
import ViewMasterSchedule from "@mui/icons-material/AssignmentSharp";
import ViewRegData from "@mui/icons-material/DataArraySharp";
import HoldsIcon from "@mui/icons-material/StopCircle";
import ViewGrades from "@mui/icons-material/GradeSharp";
import Logout from "@mui/icons-material/LogoutSharp";

export const SidebarData = [
  {
    title: " Home",
    icon: <HomeIcon />,
    link: "/home",
  },

  {
    title: "View Master Schedule",
    icon: <ViewMasterSchedule />,
    link: "/viewMasterSchedule",
  },

  {
    title: "View Course Catalog",
    icon: <ViewCourses />,
    link: "/viewCourseCatalog",
  },

  {
    title: "View Exam Schedules",
    icon: <ViewExams />,
    link: "/examSchedules",
  },

  {
    title: "View Registration Data",
    icon: <ViewRegData />,
    link: "/registrationData",
  },

  {
    title: "View Student Holds",
    icon: <HoldsIcon />,
    link: "/holds",
  },

  {
    title: "View Grade Data",
    icon: <ViewGrades />,
    link: "/viewGradeData",
  },

  {
    title: "Logout",
    icon: <Logout />,
    link: "/logout",
  },
];
