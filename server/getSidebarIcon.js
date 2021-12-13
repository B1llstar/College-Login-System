import HomeIcon from "@mui/icons-material/Home";
import CourseMgmtIcon from "@mui/icons-material/FormatListBulleted";
import AdvisorIcon from "@mui/icons-material/SupervisorAccount";
import ViewExams from "@mui/icons-material/CalendarTodaySharp";
import DropRequests from "@mui/icons-material/AdminPanelSettingsSharp";
import RecordAttendance from "@mui/icons-material/RadioButtonCheckedSharp";
import HoldsIcon from "@mui/icons-material/StopCircle";
import TranscriptIcon from "@mui/icons-material/HistoryEdu";
import StudentSchedule from "@mui/icons-material/ListAltSharp";
import DegAuditIcon from "@mui/icons-material/School";
import Logout from "@mui/icons-material/LogoutSharp";

const icon = function (name) {
  switch (name) {
    case "home":
      return <HomeIcon />;
      break;
    case "viewCourses":
      return <CourseMgmtIcon />;
      break;

    case "viewAdvisees":
      return <AdvisorIcon />;
      break;

    case "viewExamSchedules":
      return <ViewExams />;
      break;
    case "viewDropRequests":
      return <DropRequests />;
      break;

    case "recordAttendance":
      return <RecordAttendance />;
      break;
    case "accessTranscript":
      return <TranscriptIcon />;
      break;
    case "accessStudentSchedule":
      return <StudentSchedule />;
      break;
    case "accessStudentReg":
      return <DegAuditIcon />;
      break;
    case "holds":
      return <HoldsIcon />;
      break;
    case "logout":
      return <Logout />;
      break;
    default:
      console.log("x");
  }
};

module.exports = icon;
