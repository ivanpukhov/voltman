import React from 'react';

const WholesaleCapacityFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleCapacityChange = event => {
        const value = event.target.value;
        onFilterChange('capacity_ah', value);
    };

    return (
        <div>
            <label>Емкость (Ah): </label>
            <select value={selectedValue} onChange={handleCapacityChange}>
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

export default WholesaleCapacityFilter;
