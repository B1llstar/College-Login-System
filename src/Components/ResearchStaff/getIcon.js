import HomeIcon from "@mui/icons-material/Home";

import ViewCourses from "@mui/icons-material/ListAltSharp";
import ViewExams from "@mui/icons-material/CalendarTodaySharp";
import ViewMasterSchedule from "@mui/icons-material/AssignmentSharp";
import ViewRegData from "@mui/icons-material/DataArraySharp";
import HoldsIcon from "@mui/icons-material/StopCircle";
import ViewGrades from "@mui/icons-material/GradeSharp";
import Logout from "@mui/icons-material/LogoutSharp";

const icon = function (name) {
  switch (name) {
    case "home":
      return <HomeIcon />;
      break;

    case "viewMasterSchedule":
      return <ViewMasterSchedule />;
      break;
    case "viewCourseCatalog":
      return <ViewCourses />;
      break;
    case "examSchedules": // viewExamSchedules
      return <ViewExams />;
      break;
    case "registrationData": // viewRegistrationData
      return <ViewRegData />;
      break;
    case "holds": // View Student HOlds
      return <HoldsIcon />;
      break;
    case "viewGradeData":
      return <ViewGrades />;
      break;
    case "logout":
      return <Logout />;
      break;
    default:
      console.log("x");
  }
};

module.exports = icon;
