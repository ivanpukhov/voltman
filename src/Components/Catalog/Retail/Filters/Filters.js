import React from 'react';
import PriceFilter from "./FilterOptions/PriceFilter";
import CapacityFilter from "./FilterOptions/CapacityFilter";
import LengthFilter from "./FilterOptions/LengthFilter";
import WeightFilter from "./FilterOptions/WeightFilter";
import WidthFilter from "./FilterOptions/WidthFilter";
import HeightFilter from "./FilterOptions/HeightFilter";
import CategoryFilter from "./FilterOptions/CategoryFilter";


const Filters = ({ filterOptions, selectedFilters, onFilterChange, onResetFilters }) => {
    const handleFilterChange = (filterName, value) => {
        onFilterChange(filterName, value);
    };

    const handleResetFilters = () => {
        onResetFilters();
    };
    return (
        <div className="filters">
            <h2>Фильтры</h2>
            {/*<CategoryFilter*/}
            {/*    options={filterOptions.categories}*/}
            {/*    selectedValue={selectedFilters.category_id}*/}
            {/*    onFilterChange={handleFilterChange}*/}
            {/*    // options_retail_price={options_retail_price}*/}
            {/*/>*/}
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

            <button onClick={handleResetFilters}>Сбросить фильтры</button>
        </div>
    );
};

export default Filters;
