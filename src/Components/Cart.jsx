import React, {useState} from 'react';
import {useCart} from '../CartContext';
import axios from 'axios';
import Modal from 'react-modal';
import cartPhoto from './../assets/img/cart.webp';
import x from './../assets/img/x.webp';
import xx from './../assets/img/xx.webp';

Modal.setAppElement('#root');

const Cart = () => {
    const {cartItems, removeFromCart, updateQuantity} = useCart();
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [alertModalIsOpen, setAlertModalIsOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const openAlertModal = (message) => {
        setAlertMessage(message);
        setAlertModalIsOpen(true);
    };

    const closeAlertModal = () => setAlertModalIsOpen(false);

    const handleSubmit = async () => {
        const orderData = {
            customer_name: customerName,
            customer_phone: customerPhone,
            address: customerAddress,
            items: cartItems.map(item => ({
                product_id: item.product.id, quantity: item.quantity,
            })),
        };
        try {
            const response = await axios.post('https://voltman.ix-web.site/api/order', orderData);
            if (response.data.message) {
                openAlertModal(`Номер заказа: ${response.data.orderId}. Вам скоро перезвонят!`);
            }
        } catch (error) {
            openAlertModal(`Ошибка создания заказа: ${error}`);
        }
    };

    const handleQuantityChange = (e, product) => {
        updateQuantity(product.id, parseInt(e.target.value));
    };

    return (<>
        <button onClick={openModal} className='cart__btn'>
            <img src={cartPhoto} alt=''/>
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Корзина'>
            <div onClick={closeModal} className='closeModal'>
                <img src={xx} alt=''/>
            </div>
            <div className="cart">
                <div className="cart__title">
                    Корзина
                </div>
                <div className="cart-products">
                    {cartItems.length === 0 ? (<div>Ваша корзина пуста</div>) : (cartItems.map(({
                                                                                                    product, quantity
                                                                                                }) => (

                        <div key={product.id} className="cart__products">


                            <div className="cart__left">
                                {/*<div className="product__title">{product.id}</div>*/}
                                <div className="cart__title">{product.model} </div>
                                <div className="cart__price">{product.retail_price} тг.</div>


                            </div>
                            <div className="cart__right">
                                <input
                                    type="text"
                                    value={quantity}
                                    min="1"
                                    className='cart__qual'
                                    onChange={(e) => handleQuantityChange(e, product)}
                                />
                                <div className="cart-item__remove" onClick={() => removeFromCart(product.id)}>
                                    <img src={x} alt=""/>
                                </div>


                            </div>

                        </div>)))}
                </div>
                {cartItems.length === 0 ? (<div>Добавьте товары в корзину</div>) : (

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


                )}
            </div>
        </Modal>
        <Modal isOpen={alertModalIsOpen} onRequestClose={closeAlertModal} contentLabel='Alert Modal'>
            <div className="order__create-center">
                <div className="order__create">
                    <div className="order__title">
                        Заказ создан
                    </div>
                    <div className="order__message">
                        {alertMessage}
                    </div>
                    <button className='order__create-btn' onClick={closeAlertModal}>Закрыть</button>
                </div>
            </div>
        </Modal>
    </>);
};

export default Cart;
