import React, {useState} from 'react';
import {useCart} from '../../../CartContext';

const Product = ({product}) => {
    const {addToCart} = useCart();
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        addToCart(product);
        setButtonClicked(true);
    }

    return (
            <div className="product">
                <div className="product__photo">
                    <img src={product.photo} alt={product.model}/>
                </div>
                <div className="product__content">
                    <div className="product__title">{product.model}</div>
                    <div className="product__price">{product.wholesale_price} тг.</div>
                    <div className="product__is">Есть в наличии</div>

                    <div className="product__btn"
                         onClick={handleButtonClick}
                         style={{
                             backgroundColor: buttonClicked ? 'green' : '#FFF200',
                             color: buttonClicked ? '#fff' : '#000'
                         }}>
                        {buttonClicked ? '✓' : 'Заказать'}
                    </div>
                </div>
            </div>
    );
};

export default Product;
