import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import {Link} from "react-router-dom"; // Импорт контекста аутентификации

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { token } = useAuth(); // Извлечение токена из контекста

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                };
                const response = await axios.get('/orders', config);
                setOrders(response.data.orders);
            } catch (error) {
                console.error("An error occurred while fetching data: ", error);
            }
        };

        fetchData();
    }, [token]); // Зависимость от токена

    return (
        <div>
            <h1>Your Orders</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.customer_name} - {order.customer_phone}
                        <Link to={`/order/${order.id}`}>View Order</Link> {/* Добавляем ссылку на заказ */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
