import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Список Продуктов</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <p>Модель: {product.model}</p>
                        <p>Цена: {product.retail_price}</p>
                        {/* Добавьте другие атрибуты продукта здесь */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
