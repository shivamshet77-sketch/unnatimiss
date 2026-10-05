import { useReducer, useMemo } from "react";
import StudentForm from "./StudentForm";
import StudentCard from "./StudentCard";

function reducer(state, action) {
  if (action.type === "add") return [...state, action.payload];
  if (action.type === "delete") return state.filter((_, i) => i !== action.payload);
  return state;
}

function StudentList() {
  const [students, dispatch] = useReducer(reducer, []);
  const count = useMemo(() => students.length, [students]);

  return (
    <div style={{ textAlign: "center" }}>
      <StudentForm onAddStudent={(name) => dispatch({ type: "add", payload: name })} />
      <h3>Total Students: {count}</h3>

      {students.map((name, i) => (
        <StudentCard
          key={i}
          studentName={name}
          onDelete={() => dispatch({ type: "delete", payload: i })}
        />
      ))}
    </div>
  );
}

export default StudentList;