import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`); // Use backticks for string interpolation
    }

    return (
        <div className='home-page'>
            <form onSubmit={handleFormSubmit} className="form">
                <div>
                    <label>Enter Room ID</label>
                    <input 
                        value={roomCode} 
                        onChange={e => setRoomCode(e.target.value)} // onChange not onchange
                        type="text" 
                        required 
                        placeholder="Enter Room ID" 
                    />
                </div>
                <button type="submit">Enter Room</button>
            </form>
        </div >
    );
};

export default HomePage;
