import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

export const Register = () => {
    const { setToken } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        // Здесь ваш код для отправки данных на сервер и получения токена
        // Например:
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.token) {
            setToken(data.token);
        } else {
            // Обработка ошибок
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleRegister}>Register</button>
        </div>
    );
};
