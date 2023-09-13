import React from 'react';
import Select from 'react-select';

const WidthFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleWidthChange = selectedOption => {
        onFilterChange('width_ah', selectedOption.value);
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
                onChange={handleWidthChange}
                options={selectOptions}
                classNamePrefix="custom-select"
            />
        </div>
    );
};

export default WidthFilter;
