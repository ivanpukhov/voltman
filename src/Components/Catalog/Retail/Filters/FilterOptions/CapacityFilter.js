import React from 'react';
import Select from 'react-select';

const CapacityFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleCapacityChange = selectedOption => {
        onFilterChange('capacity_ah', selectedOption.value);
    };

    const selectOptions = options.map(option => ({
        value: option,
        label: option
    }));

    const selectedOption = selectOptions.find(option => option.value === selectedValue);

    return (
        <div>
            <Select
                value={selectedOption}
                onChange={handleCapacityChange}
                options={selectOptions}
                classNamePrefix="custom-select"
                placeholder='Емкость, Ач'
            />
        </div>
    );
};

export default CapacityFilter;
