// Main App component.
// Sets up navigation menu using react-router-dom and displays all main components.
// Navigation links route to Activities, Leaderboard, Teams, Users, and Workouts.
import { NavLink, Routes, Route } from 'react-router-dom';
import logo from '../public/logo192.png';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        <NavLink className="navbar-brand fw-bold text-white d-flex align-items-center" to="/">
          <img src={logo} alt="OctoFit Logo" className="octofit-logo" />
          OctoFit Tracker
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link text-white" to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
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
