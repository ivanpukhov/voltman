import React from 'react';

const HeightFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleHeightChange = event => {
        const value = event.target.value;
        onFilterChange('height_mm', value);
    };

    return (
        <div>
            <select value={selectedValue} onChange={handleHeightChange}>
                <option value="">Высота (мм):</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default HeightFilter;
