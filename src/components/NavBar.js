import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          {/* <img src="/logo.png"></img> */}
          Rishanth Rajendhran
          </div>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <ThemeToggle/>
        </div>
      </div>
    </nav>
  );
}