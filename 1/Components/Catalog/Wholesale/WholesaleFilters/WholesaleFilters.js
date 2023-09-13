import React from 'react';
import PriceFilter from "./WholesaleFilterOptions/WholesalePriceFilter";
import WholesaleCapacityFilter from "./WholesaleFilterOptions/WholesaleCapacityFilter";
import WholesaleLengthFilter from "./WholesaleFilterOptions/WholesaleLengthFilter";
import WholesaleWeightFilter from "./WholesaleFilterOptions/WholesaleWeightFilter";
import WholesaleWidthFilter from "./WholesaleFilterOptions/WholesaleWidthFilter";
import WholesaleHeightFilter from "./WholesaleFilterOptions/WholesaleHeightFilter";
import WholesaleCategoryFilter from "./WholesaleFilterOptions/WholesaleCategoryFilter";
import WholesalePriceFilter from "./WholesaleFilterOptions/WholesalePriceFilter";


const WholesaleFilters = ({ filterOptions, selectedFilters, onFilterChange, onResetFilters }) => {
    const handleFilterChange = (filterName, value) => {
        onFilterChange(filterName, value);
    };

    const handleResetFilters = () => {
        onResetFilters();
    };

    return (
        <div>
            <h2>Фильтры</h2>
            <WholesaleCategoryFilter
                options={filterOptions.categories}
                selectedValue={selectedFilters.category_id}
                onFilterChange={handleFilterChange}
            />
            <WholesalePriceFilter
                selectedValue={{
                    min_wholesale_price: selectedFilters.min_wholesale_price,
                    max_wholesale_price: selectedFilters.max_wholesale_price
                }}
                onFilterChange={handleFilterChange}
            />
            <WholesaleCapacityFilter
                options={filterOptions.capacity_ah}
                selectedValue={selectedFilters.capacity_ah}
                onFilterChange={handleFilterChange}
            />

            <WholesaleLengthFilter
                options={filterOptions.length_mm}
                selectedValue={selectedFilters.length_mm}
                onFilterChange={handleFilterChange}
            />
            <WholesaleWeightFilter
                options={filterOptions.weight_kg}
                selectedValue={selectedFilters.weight_kg}
                onFilterChange={handleFilterChange}
            />
            <WholesaleWidthFilter
                options={filterOptions.width_mm}
                selectedValue={selectedFilters.width_mm}
                onFilterChange={handleFilterChange}
            />
            <WholesaleHeightFilter
                options={filterOptions.height_mm}
                selectedValue={selectedFilters.height_mm}
                onFilterChange={handleFilterChange}
            />

            <button onClick={handleResetFilters}>Сбросить фильтры</button>
        </div>
    );
};

export default WholesaleFilters;
