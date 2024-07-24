/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import authStore from '../../store/Store.js';
import { apiURL } from '../../config/config.js';
const Logout = () => {
    const navigate = useNavigate();
    const logout = authStore((state) => state.logout);

    const handleLogout = async () => {
        try {
            const response = await fetch(`${apiURL}/api/auth/logout`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok) {
                logout();
                navigate('/login');
            } else {
                console.error(data.message);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
