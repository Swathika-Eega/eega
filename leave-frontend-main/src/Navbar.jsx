import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Navbar({ setUser }) {
  return (
    <div className="navbar">
      Smart Leave Management
      <button
        className="logout-btn"
        onClick={() => setUser(null)}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;