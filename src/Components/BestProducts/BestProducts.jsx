import Product from "../Product/Product";
import s from '../../BestProduct.module.css'
import BestProduct from "../BestProduct/BestProduct";

const BestProducts = ({ products = [] }) => {



    return (
        <div>
            {products.length === 0 ? (
                <div>Товары не найдены</div>
            ) : (
                <div className={s.bproducts}>

                {products.map((product) => (
                        <BestProduct key={product.id} product={product}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BestProducts;
