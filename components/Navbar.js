import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">SafeDrive</Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/login" className="btn btn-outline">Login</Link></li>
                    <li><Link to="/signup" className="btn btn-primary">Sign Up</Link></li>
                </ul>
                <button className="menu-toggle">☰</button>
            </div>
        </nav>
    );
};

export default Navbar;

