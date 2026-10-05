import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Us</h1>

      <div className="card">
        <p>Email: college@example.com</p>
        <p>Phone: 8765467896</p>
      </div>

      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default Contact;