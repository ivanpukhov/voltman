import React, {useState} from 'react';
import {useCart} from '../../CartContext';
import s from './Product.module.css'
import defaultImage from '../../assets/img/no_photo.webp'

const Product = ({product}) => {
    const {addToCart} = useCart();
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleImageError = (e) => {
        e.target.src = defaultImage;
    }


    const handleButtonClick = () => {
        addToCart(product);
        setButtonClicked(true);
    }

    return (

        <div className="product">
            <div className="product__photo">
                <img
                    src={'http://31.129.108.131:3001/api' + product.photo}
                    alt={product.model}
                    onError={handleImageError} // Обработчик события onError
                />
            </div>
            <div className="product__content">
                <div className="product__title">{product.model}</div>
                <div className="product__price">{product.retail_price} тг.</div>
                <div className="product__is">Есть в наличии</div>

                <div className="product__btn"
                     onClick={handleButtonClick}
                     style={{
                         backgroundColor: buttonClicked ? 'green' : '#FFF200', color: buttonClicked ? '#fff' : '#000'
                     }}>
                    {buttonClicked ? '✓' : 'Заказать'}
                </div>
            </div>
        </div>

    );
};

export default Product;
