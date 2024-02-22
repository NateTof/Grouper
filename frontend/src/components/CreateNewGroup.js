import React from 'react';
import { useNavigate } from 'react-router-dom';
function CreateNewGroup() {
    const navigate = useNavigate();

    const createTask = async () => {
        navigate('/createnewgroup/createnewtask');
    };
    return (
        <div className="CreateNewGroup">
            <h1>Create a new group here!</h1>
            <button onClick={createTask}>Make new task</button>
        </div>
    );
}

export default CreateNewGroup;
