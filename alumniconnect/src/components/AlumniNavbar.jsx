import React from 'react';
import { Link } from 'react-router-dom';

const AlumniNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Alumni Network</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* Profile */}
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            {/* Directory */}
            <li className="nav-item">
              <Link className="nav-link" to="/directory">Directory</Link>
            </li>
            {/* Events */}
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            {/* Networking */}
            <li className="nav-item">
              <Link className="nav-link" to="/networking">Networking</Link>
            </li>
            {/* Donate */}
            <li className="nav-item">
              <Link className="nav-link" to="/donate">Donate</Link>
            </li>
            {/* Resources */}
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            {/* Messages */}
            <li className="nav-item">
              <Link className="nav-link" to="/messages">Messages</Link>
            </li>
            {/* Settings */}
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings</Link>
            </li>
            {/* Logout */}
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AlumniNavbar;
