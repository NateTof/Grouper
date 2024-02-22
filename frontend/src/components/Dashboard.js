import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };
    const createGroup = async () => {
        navigate('/createnewgroup');
    };

    return (
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={createGroup}>Make new group</button>
        </div>
    );
}

export default Dashboard;
