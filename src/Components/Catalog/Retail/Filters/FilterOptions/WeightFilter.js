import React from 'react';
import Select from 'react-select';

const WeightFilter = ({ options, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleWeightChange = selectedOption => {
        onFilterChange('weight_ah', selectedOption.value);
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
                onChange={handleWeightChange}
                options={selectOptions}
                classNamePrefix="custom-select"
                placeholder='Масса, кг'

            />
        </div>
    );
};

export default WeightFilter;
