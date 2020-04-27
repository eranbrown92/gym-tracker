import React from "react";
import stop from '../assets/stop.png';

export default function Status({ status, msg }) {
  return (
    <div>
      <h3 className="text-center">Status</h3>
      {status === 10 ? (
        <>
          <div className='text-center'><img src={stop} alt="stop" /></div>
          <h2 className="text-danger">
            {status} Patrons are currently in the gym
          </h2>
          <p>{msg}</p>
        </>
      ) : status === 0 ? (
        <p className="text-center">There are no patrons in the gym</p>
      ) : (
            <div className="jumbotron">
              <div className="container">
                <h1 className="display-4 text-center">{status}</h1>
                <p className="lead text-center">Patron(s) in the gym</p>
              </div>
            </div>
          )}
    </div>
  );
}