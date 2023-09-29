import Product from "../Product/Product";
import s from './Products.module.css'


const Products = ({ products }) => {
    console.log(products)

    return (
        <div>
            {products.length === 0 ? (
                <div className="noneproduct">Ой, такого нет :(</div>
            ) : (
                <div className="products">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            )}

        </div>
    );
};



export default Products;
