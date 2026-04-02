import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Dashboard.css";

function ManageLeaves({ setPage, setUser }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-1-8nwr.onrender.com/api/leaves/all")
      .then((res) => setLeaves(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `https://backend-1-8nwr.onrender.com/api/leaves/${id}/${status}`
      );

      setLeaves(
        leaves.map((leave) =>
          leave.id === id ? { ...leave, status } : leave
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  };

  return (
    <>
      <Navbar setUser={setUser} />

      <div className="page">
        <div className="card">
          <h2>Leave Requests</h2>

          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Start</th>
                <th>End</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {leaves.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.email}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                  <td>
                    <button
                      className="btn-green"
                      onClick={() =>
                        updateStatus(leave.id, "APPROVED")
                      }
                    >
                      Approve
                    </button>

                    <button
                      className="btn-red"
                      onClick={() =>
                        updateStatus(leave.id, "REJECTED")
                      }
                    >
                      Reject
                    </button>
                  </td>
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

export default ManageLeaves;