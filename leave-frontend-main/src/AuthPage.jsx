import { useState } from "react";
import axios from "axios";
import "./Auth.css";

function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EMPLOYEE");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await axios.post(
          "https://backend-1-8nwr.onrender.com/api/users/login",
          { email, password, role }
        );

        onLogin(res.data);
      } else {
        await axios.post(
          "https://backend-1-8nwr.onrender.com/api/users/register",
          { email, password, role }
        );

        alert("Registered successfully. Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      alert("Login/Register failed");
      console.log(err);
    }
  };

  return (
    <>
      <div className="navbar">Smart Employee Leave Management System</div>

      <div className="container">
        <h2>{isLogin ? "🔐 Login" : "📝 Register"}</h2>
        <p style={{ color: "gray" }}>
          {isLogin
            ? "Welcome back! Please login."
            : "Create a new account"}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="📧 Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="🔑 Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="EMPLOYEE">Employee</option>
            <option value="MANAGER">Manager</option>
          </select>

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <button
          className="btn-gray"
          onClick={() => setIsLogin(!isLogin)}
        >
          Switch to {isLogin ? "Register" : "Login"}
        </button>

        <p style={{ marginTop: "15px", fontSize: "12px", color: "gray" }}>
          Employee Leave Management System © 2026
        </p>
      </div>
    </>
  );
}

export default AuthPage;