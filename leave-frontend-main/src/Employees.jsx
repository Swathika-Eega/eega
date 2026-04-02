import Navbar from "./Navbar";
import "./Dashboard.css";

function Employees({ setPage, setUser }) {
  return (
    <>
      <Navbar setUser={setUser} />
      <div className="page">
        <div className="card">
          <h2>Employees</h2>
          <p>Employee list will be shown here</p>

          <button onClick={() => setPage("dashboard")}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Employees;