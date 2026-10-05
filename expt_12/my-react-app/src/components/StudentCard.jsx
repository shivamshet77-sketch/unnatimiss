function StudentCard({ studentName, onDelete }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 12, padding: 10 }}>
      <span>{studentName}</span>
      <button onClick={onDelete}>Remove</button>
    </div>
  );
}

export default StudentCard;