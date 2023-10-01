import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useParams } from 'react-router-dom'; // Импорт хука useParams для получения параметров URL

const Order = () => {
    const [order, setOrder] = useState(null);
    const { id } = useParams(); // Извлечение id из URL
    const { token } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                };
                const response = await axios.get(`https://voltman.ix-web.site/api/order/${id}`, config);
                setOrder(response.data);
            } catch (error) {
                console.error("An error occurred while fetching data: ", error);
            }
        };

        fetchData();
    }, [id, token]);

    return (
        <div>
            <h1>Order Details</h1>
                <div>
                    <p>Customer Name: {order.customer_name}</p>
                    <p>Customer Phone: {order.customer_phone}</p>
                    {/* Добавьте другие поля заказа, если необходимо */}
                    <div className="footer__btn">jrn</div>
                </div>
        </div>
    );
};

export default Order;
