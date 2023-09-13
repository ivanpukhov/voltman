import React from 'react';

const WholesaleLengthFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleLengthChange = event => {
        const value = event.target.value;
        onFilterChange('length_mm', value);
    };

    return (
        <div>
            <label>Длина (мм): </label>
            <select value={selectedValue} onChange={handleLengthChange}>
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

export default WholesaleLengthFilter;
