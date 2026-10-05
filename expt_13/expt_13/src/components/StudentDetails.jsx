import { Link, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Student Details</h1>

      <div className="card">
        <p><strong>Student Id:</strong> {id}</p>
        <p>This value is received from the dynamic URL.</p>
      </div>

      <Link to="/students">Back to Students</Link>
    </div>
  );
}

export default StudentDetails;