import React from "react";
import User from "./User";

export default function CurrentUsers({ currentUsers, remove, err, timeInMs }) {
  return (
    <div>
      <h3>Current Users</h3>
      {currentUsers.map(user => (
        <User key={user.id} userData={user} remove={remove} err={err} time={user.timein} timeInMs={timeInMs} />
      ))}
    </div>
  );
}