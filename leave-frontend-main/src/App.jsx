import { useState } from "react";
import AuthPage from "./AuthPage";
import EmployeeDashboard from "./EmployeeDashboard";
import ManagerDashboard from "./ManagerDashboard";
import ApplyLeave from "./ApplyLeave";
import ViewLeaves from "./ViewLeaves";
import ManageLeaves from "./ManageLeaves";
import LeaveBalance from "./LeaveBalance";
import Profile from "./Profile";
import Reports from "./Reports";
import Employees from "./Employees";
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  // If not logged in → Login/Register page
  if (!user) {
    return <AuthPage onLogin={setUser} />;
  }

  // EMPLOYEE ROUTES
  if (user.role === "EMPLOYEE") {
    switch (page) {
      case "apply":
        return (
          <ApplyLeave
            setPage={setPage}
            user={user}
            setUser={setUser}
          />
        );

      case "view":
        return (
          <ViewLeaves
            setPage={setPage}
            user={user}
            setUser={setUser}
          />
        );

      case "balance":
        return (
          <LeaveBalance
            setPage={setPage}
            user={user}
            setUser={setUser}
          />
        );

      case "profile":
        return (
          <Profile
            setPage={setPage}
            user={user}
            setUser={setUser}
          />
        );

      default:
        return (
          <EmployeeDashboard
            user={user}
            setUser={setUser}
            setPage={setPage}
          />
        );
    }
  }

  // MANAGER ROUTES
  if (user.role === "MANAGER") {
    switch (page) {
      case "manage":
        return (
          <ManageLeaves
            setPage={setPage}
            setUser={setUser}
          />
        );

      case "reports":
        return (
          <Reports
            setPage={setPage}
            setUser={setUser}
          />
        );

      case "employees":
        return (
          <Employees
            setPage={setPage}
            setUser={setUser}
          />
        );

      default:
        return (
          <ManagerDashboard
            user={user}
            setUser={setUser}
            setPage={setPage}
          />
        );
    }
  }

  return <div>Invalid Role</div>;
}

export default App;