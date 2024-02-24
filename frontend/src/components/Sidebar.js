import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={`menu-button ${isOpen ? 'hide' : ''}`} onClick={toggleSidebar}>
        Menu
      </button>
      <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <button className="close-button" onClick={toggleSidebar}>X</button>
        <a href="#profile" className="sidebar-item profile">Profile</a>
        <a href="#create-group" className="sidebar-item">Create Group</a>
        <a href="#join-group" className="sidebar-item">Join Group</a>
        <a href="#your-groups" className="sidebar-item">Your Groups</a>
        <a href="#settings" className="sidebar-item">Settings</a>
      </div>
    </>
  );
};

export default Sidebar;



