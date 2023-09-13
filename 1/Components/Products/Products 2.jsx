import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from "./Product/Product";
import ShowProducts from "../ShowProducts/ShowProducts";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('There was an error fetching the products:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Загрузка товаров...</div>;
    }

    return (
        <ShowProducts products={products}/>
    );
};

export default Products;
