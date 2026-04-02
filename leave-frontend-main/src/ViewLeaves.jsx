import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Dashboard.css";

function ViewLeaves({ setPage, user, setUser }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios
      .get(`https://backend-1-8nwr.onrender.com/api/leaves/${user.email}`)
      .then((res) => setLeaves(res.data));
  }, []);

  return (
    <>
      <Navbar setUser={setUser} />

      <div className="page">
        <div className="card">
          <h2>My Leaves</h2>

          <table>
            <thead>
              <tr>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {leaves.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={() => setPage("dashboard")}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default ViewLeaves;