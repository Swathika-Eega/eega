import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Dashboard.css";

function EmployeeDashboard({ setUser, setPage }) {
  return (
    <div className="page">
      <div className="card">
        <h2>Employee Dashboard</h2>

        <button onClick={() => setPage("apply")}>Apply Leave</button>
<button onClick={() => setPage("view")}>My Leaves</button>
<button onClick={() => setPage("balance")}>Leave Balance</button>
<button onClick={() => setPage("profile")}>Profile</button>
<button onClick={() => setUser(null)}>Logout</button>
      </div>
    </div>
  );
}

export default EmployeeDashboard;