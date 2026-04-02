import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Dashboard.css";

function ManagerDashboard({ setPage, setUser }) {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
    today: 0
  });

  useEffect(() => {
    axios
      .get("https://backend-1-8nwr.onrender.com/api/leaves/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar setUser={setUser} />

      <div className="page">
        <div className="card">
          <h2>Manager Dashboard</h2>

          <div className="stats-container">
            <div className="stat-box">
              <h3>Total</h3>
              <p>{stats.total}</p>
            </div>

            <div className="stat-box">
              <h3>Pending</h3>
              <p>{stats.pending}</p>
            </div>

            <div className="stat-box">
              <h3>Approved</h3>
              <p>{stats.approved}</p>
            </div>

            <div className="stat-box">
              <h3>Rejected</h3>
              <p>{stats.rejected}</p>
            </div>

            <div className="stat-box">
              <h3>Today</h3>
              <p>{stats.today}</p>
            </div>
          </div>

          <button onClick={() => setPage("manage")}>Manage Leaves</button>
<button onClick={() => setPage("employees")}>Employees</button>
<button onClick={() => setPage("reports")}>Reports</button>
<button onClick={() => setUser(null)}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default ManagerDashboard;