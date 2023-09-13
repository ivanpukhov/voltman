import React from 'react';

const WholesalePriceFilter = ({ selectedValue, onFilterChange }) => {
    const handlePriceChange = (type, event) => {
        const value = event.target.value;
        onFilterChange(type, value);
    };

    return (
        <div>
            <label>Цена: </label>
            <input
                type="number"
                placeholder="Мин."
                value={selectedValue.min_wholesale_price || ''}
                onChange={e => handlePriceChange('min_wholesale_price', e)}
            />
            <input
                type="number"
                placeholder="Макс."
                value={selectedValue.max_wholesale_price || ''}
                onChange={e => handlePriceChange('max_wholesale_price', e)}
            />
        </div>
    );
};

export default WholesalePriceFilter;
