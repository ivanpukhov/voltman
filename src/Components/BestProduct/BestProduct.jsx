import React, {useState} from 'react';
import s from '../../BestProduct.module.css'
import {useCart} from "../../CartContext";

const BestProduct = ({product}) => {
    const { addToCart } = useCart();
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        addToCart(product);
        setButtonClicked(true);
    }
    return (

        <div key={product.id} className={s.bproduct}>
            <div className={s.bproduct__photo}>
                <img src={'http://localhost:3001' + product.photo} alt={product.model} alt=""/>
            </div>
            <div className={s.bproduct__content}>
                <div className={s.bproduct__title}>{product.model}</div>
                <div className={s.bproduct__price}>{product.retail_price} тг.</div>
                <div className={s.bproduct__is}>Есть в наличии</div>
                <div className={s.bproduct__btn}
                     onClick={handleButtonClick}
                     style={{backgroundColor: buttonClicked ? 'green' : '#FFF200', color: buttonClicked ? '#fff' : '#000'}}>
                    {buttonClicked ? '✓' : 'Заказать'}
                </div>
            </div>
        </div>
    );
};

export default BestProduct;
