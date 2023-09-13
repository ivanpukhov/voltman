import React, { useState } from 'react';

const PriceInput = ({ label, value, min, max, onChange }) => {
    const [timeoutId, setTimeoutId] = useState(null);

    const handleChange = (newValue) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const newTimeoutId = setTimeout(() => {
            onChange(newValue);
        }, 150);

        setTimeoutId(newTimeoutId);
    };

    return (
        <>
            <label>{label}</label>
            <input
                type="number"
                placeholder={label}
                value={value || ''}
                onChange={e => handleChange(e.target.value)}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={value || 0}
                onChange={e => handleChange(e.target.value)}
            />
        </>
    );
};
const options_retail_price = [23000,30500,36000,59500,82500,25000,31500,32500,37000,42500,62000,86500,25500,64000,49000,98000,27500,29000,35000,43500,22000,28000,41500,53000,56500,58000,65000,79000,91000,99000,123500,146000,68000,60000,82000,145000,189000]

const findMinMax = options_retail_price => {
    if (!Array.isArray(options_retail_price) || !options_retail_price.length) {
        return { min: null, max: null };
    }
    const minValue = Math.min(...options_retail_price);
    const maxValue = Math.max(...options_retail_price);
    return { minValue, maxValue };
};
const PriceFilter = ({  selectedValue, onFilterChange }) => {
    const handlePriceChange = (type, value) => {
        onFilterChange(type, value);
    };


    const { minValue, maxValue } = Array.isArray(options_retail_price) && options_retail_price.length
        ? findMinMax(options_retail_price)
        : { minValue: null, maxValue: null };

    const minForMaxSlider = selectedValue.min_retail_price || 0;

    return (
        <div>
            <label>Цена: </label>
            <PriceInput
                label="Мин."
                value={selectedValue.min_retail_price}
                min={minValue}
                max={maxValue}
                onChange={value => handlePriceChange('min_retail_price', value)}
            />
            <PriceInput
                label="Макс."
                value={selectedValue.max_retail_price}
                min={minForMaxSlider}
                max={maxValue}
                onChange={value => handlePriceChange('max_retail_price', value)}
            />
        </div>
    );
};

export default PriceFilter;
