import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Импорт хука useAuth из вашего контекста
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setToken } = useAuth(); // Использование хука для получения функции установки токена

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Запрос на авторизацию
            const res = await axios.post('/login', { username, password });

            if (res.data && res.data.accessToken) {
                // Установка токена в контекст
                setToken(res.data.accessToken);
                navigate('/orders');
            } else {
                setError('Не удалось авторизоваться');
            }
        } catch (err) {
            setError('Ошибка авторизации');
        }
    };

    return (
        <div className="noneproduct dacc">
            304 доступ запрещен
        </div>
    );
};

export default Login;
