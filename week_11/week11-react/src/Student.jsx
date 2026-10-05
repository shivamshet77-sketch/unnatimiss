function Students(props) {
  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}

export default Students;