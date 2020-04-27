import React from "react";

export default function Header({ title, cleaningTimes }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-2">
        <span className="navbar-brand mb-0 h1">{title}</span>
        <span className="navbar-text">Cleaning Times - {cleaningTimes.map((time, i) => <span key={i}>{time}{" "}</span>)}</span>
      </nav>
    </div>
  );
}