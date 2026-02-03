// Main App component.
// Uses Bootstrap navigation bar for the main menu.
// All navigation links use react-router-dom and Bootstrap styles for consistency.
// Each page/component is displayed inside a Bootstrap container for layout.
import { NavLink, Routes, Route } from 'react-router-dom';

import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="container mt-4">
      {/* Bootstrap navigation bar for app-wide navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        {/* Brand/logo uses Bootstrap classes for alignment and style */}
        <NavLink className="navbar-brand fw-bold text-white d-flex align-items-center" to="/">
          <img src="/logo192.png" alt="OctoFit Logo" className="octofit-logo" />
          OctoFit Tracker
        </NavLink>
        {/* Responsive Bootstrap toggler for mobile navigation */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Bootstrap nav links for all main app sections */}
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link text-white" to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
      {/* All routes render Bootstrap-styled components for a consistent look */}
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<div className="text-center"><h1 className="display-4">Welcome to OctoFit Tracker!</h1><p className="lead">Track your fitness, join teams, and compete!</p></div>} />
      </Routes>
    </div>
  );
}

export default App;
