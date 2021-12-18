import HomeIcon from "@mui/icons-material/Home";
import ViewRegistration from "@mui/icons-material/FormatListBulleted";
import CourseSearch from "@mui/icons-material/ManageSearchSharp";
import StudentReg from "@mui/icons-material/HowToRegSharp";
import DropCourse from "@mui/icons-material/DeleteSweepSharp";
import HoldsIcon from "@mui/icons-material/StopCircle";
import TranscriptIcon from "@mui/icons-material/HistoryEdu";
import DegAuditIcon from "@mui/icons-material/School";
import AdvisorIcon from "@mui/icons-material/SupervisorAccount";
import Logout from "@mui/icons-material/LogoutSharp";
const icon = function (name) {
  switch (name) {
    case "home":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <HomeIcon />;
      break;
    case "viewRegistration":
      return <ViewRegistration />;
      break;
    case "courseSearch":
      return <CourseSearch />;
      break;
    case "registerCourse":
      return <StudentReg />;
      break;
    case "dropCourse":
      return <DropCourse />;
      break;
    case "viewHolds":
      return <HoldsIcon />;
      break;
    case "viewTranscript":
      return <TranscriptIcon />;
      break;
    case "degreeAudit":
      return <DegAuditIcon />;
      break;
    case "viewAdvisor":
      return <AdvisorIcon />;
      break;
    case "logout":
      return <Logout />;
      break;
    default:
      console.log("x");
  }
};

module.exports = icon;
