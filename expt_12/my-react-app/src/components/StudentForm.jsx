import { useState, useRef, useCallback } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const submitName = useCallback(() => {
    if (!name.trim()) return;
    onAddStudent(name);
    setName("");
    inputRef.current.focus();
  }, [name, onAddStudent]);

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Add a Student</h3>
      <input
        ref={inputRef}
        value={name}
        placeholder="Student name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submitName}>Add</button>
    </div>
  );
}

export default StudentForm;