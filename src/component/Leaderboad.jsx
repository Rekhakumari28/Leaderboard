import React, { useState } from "react";


function Leaderboad({users}) {
 const sorted = [...users].sort((a, b) => b.point - a.point);

 console.log(users)
  return (
    <div className="container my-2">
      <h2>🏆 Leaderboard</h2>
      <ol className="list-group list-group-numbered">
        {sorted.map((user) => (
          <li
            key={user._id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{user.name}</span>
            <span>{user.totalPoints} points</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboad;
