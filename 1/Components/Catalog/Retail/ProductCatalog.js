import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filters from "./Filters/Filters";
import Products from "../../Products/Products";
import CategoryFilter from "./Filters/FilterOptions/CategoryFilter";

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState({});
    const [selectedFilters, setSelectedFilters] = useState({});

    useEffect(() => {
        fetchProducts();
    }, [selectedFilters]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/products-retail', {params: selectedFilters});
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
        <div className="catalog__box">
            <Filters
                filterOptions={filterOptions}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
            />
            <div className="container prcont">
                <CategoryFilter
                    options={filterOptions.categories}
                    selectedValue={selectedFilters.category_id}
                    onFilterChange={handleFilterChange}
                    // options_retail_price={options_retail_price}
                />
                <Products products={products}/>
            </div>
        </div>
    );
};

export default ProductCatalog;
