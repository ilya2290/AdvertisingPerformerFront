// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Header.css';
import logo from './../images/umb.ico';

const Navigation: React.FC = () => (
  <header className="header">
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Home page</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
