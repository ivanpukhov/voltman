import React, { useState, useRef } from 'react';

const findMinMax = options_retail_price => {
    const minValue = Math.min(...options_retail_price);
    const maxValue = Math.max(...options_retail_price);
    return { minValue, maxValue };
};

const PriceFilter = ({ selectedValue, onFilterChange }) => {
    const options_retail_price = [30500, 0, 36000, 59500, 82500, 25000, 31500, 32500, 37000, 42500, 62000, 86500, 25500, 64000, 49000, 98000, 27500, 29000, 35000, 43500, 22000, 28000, 41500, 53000, 56500, 58000, 65000, 79000, 91000, 99000, 123500, 146000, 68000, 60000, 82000, 145000, 189000];
    const { minValue, maxValue } = findMinMax(options_retail_price);

    const [values, setValues] = useState([
        selectedValue.min_retail_price || minValue,
        selectedValue.min_retail_price || minValue,
        selectedValue.max_retail_price || maxValue
    ]);
    const sliderRef = useRef(null);

    const handlePriceChange = (newValues) => {
        onFilterChange('min_retail_price', newValues[0]);
        onFilterChange('max_retail_price', newValues[1]);
    };

    const handleMouseDown = (e, index) => {
        const moveListener = (event) => {
            const rect = sliderRef.current.getBoundingClientRect();
            let newPercent = ((event.clientX - rect.left) / rect.width) * 100;
            newPercent = Math.min(Math.max(newPercent, 0), 100);

            const newValue = Math.round((newPercent * (maxValue - minValue) / 100) + minValue);
            const newValues = [...values];
            newValues[index] = newValue;

            if (index === 0) {
                newValues[1] = Math.max(newValues[1], newValue);
            } else {
                newValues[0] = Math.min(newValues[0], newValue);
            }

            setValues(newValues);
            handlePriceChange(newValues);
        };

        document.addEventListener('mousemove', moveListener);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveListener);
        });
    };

    return (
        <div>
            <label className='filters__title'>Цена: </label>
            <div className="filters__price">
                <input
                    type="text"
                    value={values[0]}

                    onChange={(e) => {
                        const newValues = [Number(e.target.value), values[1]];
                        setValues(newValues);
                        handlePriceChange(newValues);
                    }}
                />
                <input
                    type="text"
                    value={values[1]}
                    onChange={(e) => {
                        const newValues = [values[0], Number(e.target.value)];
                        setValues(newValues);
                        handlePriceChange(newValues);
                    }}
                />
            </div>
            <div className="slider-price" ref={sliderRef}>
                <div
                    className="track"
                    style={{
                        left: `${(values[0] - minValue) / (maxValue - minValue) * 100}%`,
                        width: `${(values[1] - values[0]) / (maxValue - minValue) * 100}%`
                    }}
                ></div>
                <div
                    className="thumb"
                    style={{
                        left: `${(values[0] - minValue) / (maxValue - minValue) * 100}%`
                    }}
                    onMouseDown={(e) => handleMouseDown(e, 0)}
                ></div>
                <div
                    className="thumb"
                    style={{
                        left: `${(values[1] - minValue) / (maxValue - minValue) * 100}%`
                    }}
                    onMouseDown={(e) => handleMouseDown(e, 1)}
                ></div>
            </div>
        </div>
    );
};

export default PriceFilter;
