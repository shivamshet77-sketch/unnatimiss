import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Students from "./components/Student";
import Courses from "./components/Course";
import About from "./components/About";
import Contact from "./components/Contact";
import StudentDetails from "./components/StudentDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h2>College Portal</h2>

        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;