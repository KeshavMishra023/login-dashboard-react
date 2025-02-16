import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import "@fontsource/poppins";  // Defaults to 400 weight
import "@fontsource/poppins/600.css"; // Specific weight

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <div className='header'>
        
        {/* Navbar */}
        {/* <nav className='flex align-center justify-between p-2'>
        <div>
          <img src="./logo.webp" className='w-30' alt="" />
        </div>
          <ul className='d-flex align-items-center gap-1 fs-5 fw-semibold'>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link> 
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav> */}

        {/* Routes for Login and Register Pages */}
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
      
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
