import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WholesaleProducts from "./WholesaleProducts";
import WholesaleFilters from "./WholesaleFilters/WholesaleFilters";

const WholesaleProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState({});
    const [selectedFilters, setSelectedFilters] = useState({});

    useEffect(() => {
        fetchProducts();
    }, [selectedFilters]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/products-wholesale', { params: selectedFilters });
            setProducts(response.data.products);

            const allPrices = new Set();
            response.data.products.forEach(product => {
                allPrices.add(product.retail_price);
                allPrices.add(product.wholesale_price);
            });

            const uniquePrices = Array.from(allPrices).sort((a, b) => a - b);
            setFilterOptions({
                ...response.data.filterOptions,
                prices: uniquePrices
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleFilterChange = (filterName, value) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    const handleResetFilters = () => {
        setSelectedFilters({});
    };

    return (
        <div>
            <h1>Каталог Продуктов</h1>
            <WholesaleFilters
                filterOptions={filterOptions}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
            />
            <WholesaleProducts products={products} />
        </div>
    );
};

export default WholesaleProductCatalog;
