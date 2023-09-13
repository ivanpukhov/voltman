import React from 'react';

const WholesaleWeightFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleWeightChange = event => {
        const value = event.target.value;
        onFilterChange('weight_kg', value);
    };

    return (
        <div>
            <label>Вес (кг): </label>
            <select value={selectedValue} onChange={handleWeightChange}>
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

export default WholesaleWeightFilter;
