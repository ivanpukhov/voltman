import React from 'react';

const LengthFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleLengthChange = event => {
        const value = event.target.value;
        onFilterChange('length_mm', value);
    };

    return (
        <div>

            <select value={selectedValue} onChange={handleLengthChange}>
                <option className="categorItem" value="">Длина (мм):</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LengthFilter;
