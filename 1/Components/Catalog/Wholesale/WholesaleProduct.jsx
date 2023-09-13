import React from 'react';
import s from '../../Product/Product.module.css'
const Product = ({product }) => {
    return (
                <div key={product.id} className={s.productcard}>
                    <div className={s.productimage}>
                        <img
                            src={'http://localhost:3001'+product.photo}
                            alt={product.model}
                            className={s.productphoto}
                        />
                    </div>
                    <div className={s.productdetails}>
                        <h3 className={s.productmodel}>{product.id} {product.model}</h3>
                        <p className={s.productprice}>
                            Wholesale Price: ${product.wholesale_price}
                        </p>
                        <p className={s.productdescription}>
                            {/* Здесь может быть описание товара */}
                        </p>
                    </div>
                </div>
    );
};

export default Product;
