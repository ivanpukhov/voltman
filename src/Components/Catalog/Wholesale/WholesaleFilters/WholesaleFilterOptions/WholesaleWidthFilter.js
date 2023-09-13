import React from 'react';

const WholesaleWidthFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleWidthChange = event => {
        const value = event.target.value;
        onFilterChange('width_mm', value);
    };

    return (
        <div>
            <label>Ширина (мм): </label>
            <select value={selectedValue} onChange={handleWidthChange}>
                <option value="">Все</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default WholesaleWidthFilter;
