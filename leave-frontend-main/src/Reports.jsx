import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Dashboard.css";

function Reports({ setPage, setUser }) {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get("https://backend-1-8nwr.onrender.com/api/leaves/stats")
      .then((res) => setStats(res.data));
  }, []);

  return (
    <>
      <Navbar setUser={setUser} />
      <div className="page">
        <div className="card">
          <h2>Reports</h2>
          <p>Total Leaves: {stats.total}</p>
          <p>Pending: {stats.pending}</p>
          <p>Approved: {stats.approved}</p>
          <p>Rejected: {stats.rejected}</p>
          <button onClick={() => setPage("dashboard")}>Back</button>
        </div>
      </div>
    </>
  );
}

export default Reports;