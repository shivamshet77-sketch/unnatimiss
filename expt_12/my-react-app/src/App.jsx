import { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${clicks}`;
  }, [clicks]);

  return (
    <ThemeContext.Provider value="Light">
      <div style={{ width: "100%", minHeight: "100vh", padding: 40, textAlign: "center" }}>
        <Header />

        <div style={{ marginBottom: 30 }}>
          <h3>Click Counter: {clicks}</h3>
          <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
        </div>

        <StudentList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;