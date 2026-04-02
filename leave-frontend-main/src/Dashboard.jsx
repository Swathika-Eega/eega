import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message;
  const role = location.state?.role;

  return (
    <div>
      {/* Navbar */}
      <div style={styles.navbar}>
        Smart Employee Leave Management System
      </div>

      {/* Dashboard Content */}
      <div style={styles.page}>
        <div style={styles.card}>
          <h1>{message}</h1>
          <h2>{role} Dashboard</h2>

          {/* EMPLOYEE DASHBOARD */}
          {role === "EMPLOYEE" && (
            <>
              <button
                style={styles.greenBtn}
                onClick={() => navigate("/apply-leave")}
              >
                Apply Leave
              </button>

              <button
                style={styles.blueBtn}
                onClick={() => navigate("/leave-history")}
              >
                Leave History
              </button>

              <button
                style={styles.purpleBtn}
                onClick={() => navigate("/leave-balance")}
              >
                Leave Balance
              </button>

              <button
                style={styles.orangeBtn}
                onClick={() => navigate("/profile")}
              >
                Profile
              </button>
            </>
          )}

          {/* MANAGER DASHBOARD */}
          {role === "MANAGER" && (
            <>
              <button
                style={styles.greenBtn}
                onClick={() => navigate("/manager-stats")}
              >
                Dashboard Stats
              </button>

              <button
                style={styles.blueBtn}
                onClick={() => navigate("/pending-leaves")}
              >
                Manage Leaves
              </button>

              <button
                style={styles.purpleBtn}
                onClick={() => navigate("/employees")}
              >
                Employees
              </button>

              <button
                style={styles.orangeBtn}
                onClick={() => navigate("/reports")}
              >
                Reports
              </button>
            </>
          )}

          <button
            style={styles.redBtn}
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    background: "#2c3e50",
    color: "white",
    padding: "15px",
    fontSize: "22px",
    textAlign: "center",
    fontWeight: "bold"
  },
  page: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #5f9cff, #7b5cff)"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
    width: "350px"
  },
  greenBtn: {
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "80%"
  },
  blueBtn: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "80%"
  },
  purpleBtn: {
    backgroundColor: "#9b59b6",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "80%"
  },
  orangeBtn: {
    backgroundColor: "#f39c12",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "80%"
  },
  redBtn: {
    backgroundColor: "#e74c3c",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "80%"
  }
};

export default Dashboard;