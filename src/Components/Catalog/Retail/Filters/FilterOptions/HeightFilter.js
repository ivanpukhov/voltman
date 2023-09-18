import React from 'react';
import Select from 'react-select';

const HeightFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleHeightChange = selectedOption => {
        onFilterChange('height_ah', selectedOption.value);
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
                onChange={handleHeightChange}
                options={selectOptions}
                classNamePrefix="custom-select"
                placeholder='Высота'
            />
        </div>
    );
};

export default HeightFilter;
