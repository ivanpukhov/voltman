import React from 'react';

const WeightFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleWeightChange = event => {
        const value = event.target.value;
        onFilterChange('weight_kg', value);
    };

    return (
        <div>

            <select value={selectedValue} onChange={handleWeightChange}>
                <option className="categorItem" value="">Вес (кг):</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default WeightFilter;
