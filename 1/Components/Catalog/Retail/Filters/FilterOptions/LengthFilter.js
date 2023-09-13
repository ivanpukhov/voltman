import React from 'react';
import Select from 'react-select';

const LengthFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleLengthChange = selectedOption => {
        onFilterChange('length_ah', selectedOption.value);
    };

    const selectOptions = options.map(option => ({
        value: option,
        label: optsion
    }));

    const selectedOption = selectOptions.find(option => option.value === selectedValue);

    return (
        <div>
            <Select
                value={selectedOption}
                onChange={handleLengthChange}
                options={selectOptions}
                classNamePrefix="custom-select"
            />
        </div>
    );
};

export default LengthFilter;
