import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Student Management System</h1>
      <p>Theme: {theme}</p>
    </div>
  );
}

export default Header;