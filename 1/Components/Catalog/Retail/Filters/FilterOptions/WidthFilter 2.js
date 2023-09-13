import React from 'react';

const WidthFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleWidthChange = event => {
        const value = event.target.value;
        onFilterChange('width_mm', value);
    };

    return (
        <div>
            <select value={selectedValue} onChange={handleWidthChange}>
                <option value="">Ширина (мм):</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default WidthFilter;
