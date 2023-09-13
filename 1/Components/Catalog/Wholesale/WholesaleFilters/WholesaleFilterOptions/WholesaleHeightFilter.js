import React from 'react';

const WholesaleHeightFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleHeightChange = event => {
        const value = event.target.value;
        onFilterChange('height_mm', value);
    };

    return (
        <div>
            <label>Высота (мм): </label>
            <select value={selectedValue} onChange={handleHeightChange}>
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

export default WholesaleHeightFilter;
