import React, { useState } from "react";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import Status from "./components/Status";
import CurrentUsers from "./components/CurrentUsers";

const _ = require("underscore");

export default function App() {
  const [users, setUsers] = useState([]);
  const [err, setError] = useState(false);

  // handle user submissions
  const handleUserSubmissions = (user) => {
    // check for dup names

    // get usernames
    const usernames = _.pluck(users, "name");

    // find dupes
    if (usernames.includes(user.name)) {
      setError(true);
      return;
    } else {
      setError(false);
      // add users to array
      setUsers([...users, user]);
    }
  };

  // allow a user to leave the gym
  const removeUser = (id) => {
    const removedUsers = users.filter((user) => user.id !== id);
    setUsers(removedUsers);
  };
  // Customizable variables
  const cleaningTimes = ["0900", 1700];
  const msg = `
  Due to the increasing risks of COVID-19 and to practice social distancing, restrictions are in place that 
  only permit 10 patrons at a time. Unfortunately, the gym is at maximum capacity.
  You must wait until someone leaves to enter this area. - SOTF-EA `;
  const timeInMs = 5400000;

  return (
    <div>
      <Header title="SOTF-EA GYM TRACKER" cleaningTimes={cleaningTimes} />
      <div className="container">
        <div className="row">
          <div className="col">
            <SigninForm
              handleUsers={handleUserSubmissions}
              status={users.length}
              error={err}
            />
            <Status status={users.length} msg={msg} />
          </div>
          <div className="col">
            <CurrentUsers
              currentUsers={users}
              remove={removeUser}
              err={setError}
              timeInMs={timeInMs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
