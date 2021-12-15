import HomeIcon from "@mui/icons-material/Home";
import ViewUsers from "@mui/icons-material/GroupSharp";
import CreateUsers from "@mui/icons-material/GroupAddSharp";
import ModifyUsers from "@mui/icons-material/ManageAccountsSharp";
import ViewCourses from "@mui/icons-material/ListAltSharp";
import CreateCourse from "@mui/icons-material/ListAltSharp";
import ModifyCourse from "@mui/icons-material/EditSharp";
import DeleteCourse from "@mui/icons-material/PlaylistRemoveSharp";

const [sidebarEle, setSidebarEle] = this.useState({
  title: "",
  icon: <div></div>,
  route: "",
});

const icon = function (name) {
  switch (name) {
    case "home":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <HomeIcon />;
      break;
    case "viewUsers":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <ViewUsers />;
      break;
    case "createUser":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <CreateUsers />;
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      break;
    case "modifyUser":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <ModifyUsers />;
      break;
    case "viewCourses":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <ViewCourses />;
      break;
    case "createCourse":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <CreateCourse />;
      break;
    case "modifyCourses":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <ModifyCourse />;
      break;
    case "deleteCourses":
      // setSidebarEle({ title: "", icon: <div></div>, route: "" });
      return <DeleteCourse />;
      break;
    default:
      console.log("x");
  }
};

module.exports = icon;
