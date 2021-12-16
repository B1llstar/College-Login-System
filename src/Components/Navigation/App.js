import React from "react";
import { Home, Receipt, DesktopWindows, Settings } from "@mui/icons-material";
import Sidebar from "./Sidebar";

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
  //This seems to be the function to handle links, it currently brings up an alert window
  //but surely can be repurposed to what we need.  I pasted it where the links would go, the
  //collapsible headers would not get links to anything.
}

const items = [];

const studentItems = [
  { name: "home", label: "Home", Icon: Home, onClick },
  {
    name: "registration",
    label: "Registration",
    Icon: Receipt,
    items: [
      { name: "viewRegistration", label: "View Registration", onClick },
      { name: "courseSearch", label: "Course Search", onClick },
      { name: "registerCourse", label: "Register for a Course", onClick },
      { name: "dropCourse", label: "Drop a Course", onClick },
    ],
  },
  {
    name: "academics",
    label: "Academics",
    Icon: Settings,
    items: [
      { name: "viewHolds", label: "View Holds", onClick },
      { name: "transcript", label: "Unofficial Transcript", onClick },
      { name: "degreeAudit", label: "Degree Audit", onClick },
      { name: "viewAdvisor", label: "View Advisor", onClick },
    ],
  },
  { name: "logout", label: "Logout", Icon: DesktopWindows, onClick },
];

const facultyItems = [
  { name: "home", label: "Home", Icon: Home, onClick },
  {
    name: "facultyMgmt",
    label: "Faculty Mgmt",
    Icon: Receipt,
    items: [
      { name: "viewCourses", label: "View Courses", onClick },
      { name: "viewExams", label: "Exam Schedules", onClick },
      { name: "recordAttendance", label: "Record Attendance", onClick },
    ],
  },
  {
    name: "advisorTools",
    label: "Advisor Tools",
    Icon: Settings,
    items: [
      { name: "viewAdvisees", label: "View Advisees", onClick },
      { name: "transcript", label: "Student Transcript", onClick },
      { name: "viewSchedule", label: "Student Schedule", onClick },
      { name: "viewRegistration", label: "Student Registration", onClick },
      { name: "viewHolds", label: "Student Holds", onClick },
    ],
  },
  { name: "logout", label: "Logout", Icon: DesktopWindows, onClick },
];

const adminItems = [
  { name: "home", label: "Home", Icon: Home, onClick },
  {
    name: "userAdmin",
    label: "User Administration",
    Icon: Receipt,
    items: [
      { name: "viewUsers", label: "View All Users", onClick },
      { name: "createUser", label: "Create User", onClick },
      { name: "modifyUser", label: "Modify User", onClick },
    ],
  },
  {
    name: "studentAdmin",
    label: "Student Administration",
    Icon: Settings,
    items: [
      { name: "accessReg", label: "View Student Registration", onClick },
      { name: "regCourse", label: "Register Student Course", onClick },
      { name: "dropCourse", label: "Drop Student Course", onClick },
      { name: "accessReg", label: "Student Registration", onClick },
      { name: "viewHolds", label: "View Student Holds", onClick },
      { name: "viewTranscript", label: "View Student Transcript", onClick },
      { name: "degreeAudit", label: "View Student Degree Audit", onClick },
    ],
  },
  {
    name: "courseAdmin",
    label: "Course Administration",
    Icon: Settings,
    items: [
      { name: "viewCourses", label: "View All Courses", onClick },
      { name: "createCourse", label: "Create Course", onClick },
      { name: "modifyCourse", label: "Modify Course", onClick },
      { name: "deleteCourse", label: "Delete Course", onClick },
      { name: "viewAdvise", label: "View Advisors/Advisees", onClick },
    ],
  },
  { name: "logout", label: "Logout", Icon: DesktopWindows, onClick },
];

export default function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

function StudentApp() {
  return (
    <div>
      <Sidebar items={studentItems} />
    </div>
  );
}

function FacultyApp() {
  return (
    <div>
      <Sidebar items={facultyItems} />
    </div>
  );
}

function AdminApp() {
  return (
    <div>
      <Sidebar items={adminItems} />
    </div>
  );
}

export { StudentApp, FacultyApp, AdminApp };
