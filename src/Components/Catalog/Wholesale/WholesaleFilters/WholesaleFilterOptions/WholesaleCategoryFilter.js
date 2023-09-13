import React from 'react';

const WholesaleCategoryFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleCategoryChange = event => {
        const value = event.target.value;
        onFilterChange('category_id', value);
    };

    return (
        <div>
            <label>Категория: </label>
            <select value={selectedValue} onChange={handleCategoryChange}>
                <option value="">Все</option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default WholesaleCategoryFilter;
