import React, { useState } from "react";

function AddUser({onAdd}) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //fix: prevent page reload

    if (!name.trim()) return;

    try {
      await onAdd(name.trim()); //call backend from parent
      setName(""); //reset field
    } catch (err) {
      console.error("Failed to add user:", err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter user name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button type="submit" className="btn btn-success">Add User</button>
    </form>
  );
}

export default AddUser;
