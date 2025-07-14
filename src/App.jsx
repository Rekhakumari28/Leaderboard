import { useState, useEffect } from "react";
import Header from "./component/Header";
import Leaderboad from "./component/Leaderboad";
import UserSelector from "./component/UserSelector";
import AddUser from "./component/AddUser";
import API from "./API";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const fetchUsers = async () => {
     try {
      const res = await API.get("/users"); // ✅ fixed
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleAddUser = async (name) => {
    try {
      await API.post("/users", { name });
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const handleClaim = async (userId) => {
    try {
      const res = await API.post(`/claim/${userId}`);
      alert(`${res.data.points} points claimed!`);
      setUsers(res.data.leaderboard); // leaderboard from backend
    } catch (err) {
      console.error("Error claiming points:", err);
    }
  };

  useEffect(() => {
    fetchUsers(); // ✅ auto-load users
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>User Points System</h2>

        <AddUser onAdd={handleAddUser} />

        <UserSelector
          users={users}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          handleClaim={handleClaim}
        />

        <Leaderboad users={users} />
      </div>
    </>
  );
}

export default App;
