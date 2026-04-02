import Navbar from "./Navbar";
import "./Dashboard.css";

function Profile({ user, setPage, setUser }) {
  return (
    <>
      <Navbar setUser={setUser} />

      <div className="page">
        <div className="card">
          <h2>My Profile</h2>

          <p><b>Email:</b> {user.email}</p>
          <p><b>Role:</b> {user.role}</p>

          <button onClick={() => setPage("dashboard")}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;