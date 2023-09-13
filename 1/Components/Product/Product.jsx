import React from 'react';
import s from './Product.module.css'

const Product = ({product}) => {
    return (

        <div key={product.id} className="product">
            <div className="product__photo">
                <img src={'http://localhost:3001' + product.photo} alt={product.model} alt=""/>
            </div>
            <div className="product__content">
                <div className="product__title">{product.model}</div>
                <div className="product__price">{product.retail_price} тг.</div>
                <div className="product__is">Есть в наличии</div>
                <div className="product__btn">
                    Заказать
                </div>
            </div>
        </div>
    );
};

export default Product;
