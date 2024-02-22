import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './components/Home.css';
import Groups from './components/Groups'; 
import './components/Groups.css';
import Tasks from './components/Tasks'; 
import './components/Tasks.css';
import Register from './components/Register';
import './components/Register.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;
