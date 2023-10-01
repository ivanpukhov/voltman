import React, {useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import cartPhoto from './../assets/img/cart.webp'
import xx from './../assets/img/xx.webp'

Modal.setAppElement('#root'); // Указывает корневой элемент для доступности

const Consolt = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState(''); // новое состояние
    const [customerAddress, setCustomerAddress] = useState(''); // новое состояние
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = async () => {
        const orderData = {
            customer_name: customerName,
            customer_phone: customerPhone, // новое поле
            address: customerAddress,
            items: ""
        };
        try {
            const response = await axios.post('http://31.129.108.131:3001/api/order', orderData);
            if (response.data.message) {
                alert(`Заказ создан. Номер заказа: ${response.data.orderId}`);
            }
        } catch (error) {
            alert(`Ошибка создания заказа: ${error}`);
        }
    };

    return (<>
        <button onClick={openModal} className='banner__btn'>
           Оставить заявку
        </button>Frj
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Закажите консультацию"

        >
            <div onClick={closeModal} className='closeModal'>
                <img src={xx} alt=""/>
            </div>
            <div className="cart">
                <div className="cart__title">
                    Закажите консультацию
                </div>

                    <div className="order">

                        <label className="cart__search">
                            <input
                                type="text"
                                placeholder="Имя:"
                                value={customerName}
                                onChange={e => setCustomerName(e.target.value)}
                            />
                        </label>
                        <label className="cart__search">
                            <input
                                type="text"
                                placeholder="Телефон:"
                                value={customerPhone}
                                onChange={e => setCustomerPhone(e.target.value)} // новый обработчик
                            />
                        </label>
                        <label className="cart__search">
                            <input
                                type="text"
                                placeholder="Адрес:"
                                value={customerAddress}
                                onChange={e => setCustomerAddress(e.target.value)} // новый обработчик
                            />
                        </label>
                        <button className="order__btn" onClick={handleSubmit}>
                            Заказать
                        </button>
                    </div>


            </div>
        </Modal>
    </>);
};

export default Consolt;
