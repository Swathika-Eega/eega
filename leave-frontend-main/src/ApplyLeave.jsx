import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Dashboard.css";

function ApplyLeave({ setPage, user, setUser }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const calculateDays = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diff = (end - start) / (1000 * 60 * 60 * 24) + 1;
      return diff;
    }
    return 0;
  };

  const submitLeave = async () => {
  try {
    const res = await axios.post(
      "https://backend-1-8nwr.onrender.com/api/leaves/apply",
      {
        email: user.email,
        startDate,
        endDate,
        reason
      }
    );

    console.log(res.data); 
    alert("Leave Applied Successfully");
    setPage("dashboard");

  } catch (error) {
    console.error(error);
    alert("Error applying leave");
  }
};

  return (
    <>
      <Navbar setUser={setUser} />

      <div className="page">
        <div className="card">
          <h2>Apply Leave</h2>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <p>Total Days: {calculateDays()}</p>

          <input
            type="text"
            placeholder="Enter Leave Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <button onClick={() => setPage("dashboard")}>
            Back
          </button>

          <button className="btn-blue" onClick={submitLeave}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ApplyLeave;