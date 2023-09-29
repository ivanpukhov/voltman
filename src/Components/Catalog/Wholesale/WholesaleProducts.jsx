import React from 'react';
import WholesaleProduct from './WholesaleProduct';

const Products = ({ products }) => {
    return (
        <div>
            {products.length === 0 ? (
                <div className='noneproduct'>Ой, такого нет :(</div>
            ) : (
                <div className="products">
                    {products.map((product) => {
                        // Выполняем проверку за пределами JSX
                        const isWholesalePriceValid = typeof product.wholesale_price === 'number' && product.wholesale_price > 0;

                        // Отображаем компонент только если isWholesalePriceValid равен true
                        return isWholesalePriceValid ? (
                            <WholesaleProduct key={product.id} product={product} />
                        ) : null;
                    })}
                </div>
            )}
        </div>
    );
};

export default Products;
