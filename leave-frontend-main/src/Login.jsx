import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Employee");

  const handleLogin = () => {
    axios.post("https://backend-1-8nwr.onrender.com/api/auth/login", {
      email,
      password,
      role
    })
    .then(res => {
      navigate("/dashboard", {
        state: { message: res.data.message }
      });
    })
    .catch(err => {
      alert("Invalid credentials");
    });
  };

  return (
    <div className="container">
      <h2>Smart Leave System</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option>Employee</option>
        <option>Manager</option>
        <option>Admin</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;