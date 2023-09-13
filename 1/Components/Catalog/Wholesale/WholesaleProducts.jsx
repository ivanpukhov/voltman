import Product from "../../Product/Product";
import s from '../../Products/Products.module.css'
import WholesaleProduct from "./WholesaleProduct";
const Products = ({products}) => {


    return (
        <div>
            <h1>Список товаров</h1>
            {products.length === 0 ? (
                <div>Товары не найдены</div>
            ) : (
                <div className={s.productslist}>

                {products.map((product) => (
                        <WholesaleProduct key={product.id} product={product}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
