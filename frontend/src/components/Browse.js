import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { auth } from '../firebase'; 
import { signOut } from 'firebase/auth';

function Browse() {
    const navigate = useNavigate(); 

    const handleLogout = async () => {
        await signOut(auth); 
        navigate('/login'); 
    };

    return (
        <div className="Browse">
            <h1>Browse</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Browse;
