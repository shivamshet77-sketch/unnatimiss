import { Link } from "react-router-dom";

function Students() {
  return (
    <div>
      <h1>Students</h1>
      <p>Select a student to view details</p>

      <div className="student-list">
        <Link to="/students/101">Student 101 - Asha</Link>
        <Link to="/students/102">Student 102 - Rahul</Link>
        <Link to="/students/103">Student 103 - Neha</Link>
      </div>
    </div>
  );
}

export default Students;