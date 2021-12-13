import '../components/NavigationStyles.css';
import '../components/bodyStyles.css';
import StudentSidebar from '../components/studentSidebar';


function Student() {
  return (  
    <div className="Student">
      <div id='left'>
        <StudentSidebar />
      </div>
    </div>
  );
}

export default Student;
