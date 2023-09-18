import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PriceFilter from "./FilterOptions/PriceFilter";
import CapacityFilter from "./FilterOptions/CapacityFilter";
import LengthFilter from "./FilterOptions/LengthFilter";
import WeightFilter from "./FilterOptions/WeightFilter";
import WidthFilter from "./FilterOptions/WidthFilter";
import HeightFilter from "./FilterOptions/HeightFilter";
import CategoryFilter from "./FilterOptions/CategoryFilter";
import SortFilter from "./FilterOptions/SortFilter";

const Filters = ({ filterOptions, isMobile, selectedFilters, onResetFilters, onFilterChange, selectedSort, onSortChange }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        for (let [key, value] of queryParams.entries()) {
            try {
                let deserializedValue;
                if (key === 'category_id') {
                    deserializedValue = value.split(',').map(Number);
                } else {
                    deserializedValue = JSON.parse(value);
                }
                onFilterChange(key, deserializedValue);
            } catch (error) {
                console.error(`Не удалось десериализовать значение для ключа ${key}: ${error}`);
            }
        }
    }, []);

    const handleFilterChange = (filterName, value) => {
        onFilterChange(filterName, value);
        const queryParams = new URLSearchParams(location.search);

        if (Array.isArray(value)) {
            queryParams.set(filterName, value.join(','));
        } else {
            queryParams.set(filterName, JSON.stringify(value));
        }

        navigate(`${location.pathname}?${queryParams.toString()}`);
    };

    const handleResetFilters = () => {
        onResetFilters();
        navigate(location.pathname);
    };


    return (
        <div className={`filters ${isMobile}`}>
            <CategoryFilter
                options={filterOptions.categories}
                selectedValue={selectedFilters.category_id}
                onFilterChange={handleFilterChange}
                classname="dn"

                // options_retail_price={options_retail_price}
            />
            <PriceFilter
                options={filterOptions.retail_price}
                selectedValue={{
                    min_retail_price: selectedFilters.min_retail_price,
                    max_retail_price: selectedFilters.max_retail_price
                }}
                onFilterChange={handleFilterChange}
            />
            <CapacityFilter
                options={filterOptions.capacity_ah}
                selectedValue={selectedFilters.capacity_ah}
                onFilterChange={handleFilterChange}
            />
            <LengthFilter
                options={filterOptions.length_mm}
                selectedValue={selectedFilters.length_mm}
                onFilterChange={handleFilterChange}
            />
            <WeightFilter
                options={filterOptions.weight_kg}
                selectedValue={selectedFilters.weight_kg}
                onFilterChange={handleFilterChange}
            />
            <WidthFilter
                options={filterOptions.width_mm}
                selectedValue={selectedFilters.width_mm}
                onFilterChange={handleFilterChange}
            />
            <HeightFilter
                options={filterOptions.height_mm}
                selectedValue={selectedFilters.height_mm}
                onFilterChange={handleFilterChange}
            />
            <button className='filters__btn' onClick={handleResetFilters}>Сбросить фильтры</button>
        </div>
    );
};

export default Filters;
