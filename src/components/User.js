import React from "react";
import Countdown from "react-countdown-now";

function User({ userData, remove, err, time, timeInMs }) {
  const { id, name } = userData;
  const TimeUp = () => (
    <span className="text-danger font-weight-bold">TIME IS UP!</span>
  );
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
          {name}
          <Countdown date={time + timeInMs}>
            <TimeUp />
          </Countdown>
          {/* {time} */}
          <span
            className="btn btn-danger float-right"
            onClick={() => {
              remove(id);
              err(false);
            }}
          >
            Leave
          </span>{" "}
        </li>
      </ul>
    </div>
  );
}

export default User;