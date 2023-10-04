import React, {useState} from 'react';
import {useCart} from '../../CartContext';
import s from './Product.module.css';
import defaultImage from '../../assets/img/no_photo.webp';

const Product = ({product}) => {
    const {addToCart} = useCart();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleImageError = (e) => {
        e.target.src = defaultImage;
    };

    const handleButtonClick = () => {
        setModalOpen(true);
    };

    const handleModalOrder = () => {
        addToCart(product);
        setButtonClicked(true);
        setModalOpen(false);
    };

    return (<div className="product">
        <div className="product__photo">
            <img
                src={'https://voltman.ix-web.site/api' + product.photo}
                alt={product.model}
                onError={handleImageError}
            />
        </div>
        <div className="product__content">
            <div className="product__title">{product.model}</div>
            <div className="product__price">{product.retail_price} тг.</div>
            <div className="product__is">Есть в наличии</div>

            <div className="product__btn"
                 onClick={handleButtonClick}
                 style={{
                     backgroundColor: buttonClicked ? 'green' : '#FFF200', color: buttonClicked ? '#fff' : '#000',
                 }}>
                {buttonClicked ? '✓' : 'Заказать'}
            </div>
        </div>

        {/* Модальное окно */}
        {modalOpen && (<div className="modal" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="modal__content" style={{
                backgroundColor: '#fff', padding: '20px', borderRadius: '8px', width:'300px'
            }}>
                <div className="product__content-modal">
                    <div className="product__photo">
                        <img
                            src={'https://voltman.ix-web.site/api' + product.photo}
                            alt={product.model}
                            onError={handleImageError}
                        />
                    </div>
                    <div className="product__title">{product.model}</div>
                   <div className="modal__product-content"> <div className="product__title">Цена:</div>
                    {product.retail_price} тг.</div>
                    <div className="modal__product-content"> <div className="product__title">Емкость:</div>
                        {product.cold_cranking_amps_en} А/ч</div>
                    <div className="modal__product-content"> <div className="product__title">Длина:</div>
                        {product.length_mm} мм.</div>
                    <div className="modal__product-content"> <div className="product__title">Ширина:</div>
                        {product.width_mm} мм.</div>
                    <div className="modal__product-content"> <div className="product__title">Высота:</div>
                        {product.height_mm} мм.</div>
                    <div className="modal__product-content"> <div className="product__title">Масса:</div>
                        {product.weight_kg} кг.</div>
                    {/* Дополнительные детали */}
                    <button onClick={handleModalOrder} className='product__btn-modal'>Заказать</button>
                    <button onClick={() => setModalOpen(false)} className='product__btn-close'>Закрыть</button>
                </div>
            </div>
        </div>)}
    </div>);
};

export default Product;
