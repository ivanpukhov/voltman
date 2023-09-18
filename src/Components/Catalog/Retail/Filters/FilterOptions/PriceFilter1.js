import React, { useState, useEffect, useRef } from 'react';
import './PriceFilter.css';

const options_retail_price = [23000, 30500, 36000, 59500, 82500, 25000, 31500, 32500, 37000, 42500, 62000, 86500, 25500, 64000, 49000, 98000, 27500, 29000, 35000, 43500, 22000, 28000, 41500, 53000, 56500, 58000, 65000, 79000, 91000, 99000, 123500, 146000, 68000, 60000, 82000, 145000, 189000];

const findMinMax = options => {
    const minValue = Math.min(...options);
    const maxValue = Math.max(...options);
    return { minValue, maxValue };
};

const PriceFilter = () => {
    const { minValue, maxValue } = findMinMax(options_retail_price);
    const [values, setValues] = useState([minValue, maxValue]);
    const sliderRef = useRef(null);

    const closestValue = (value) => {
        return options_retail_price.reduce((prev, curr) => {
            return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
        });
    };

    const handleThumbMove = (e, thumbIndex) => {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const value = minValue + ((x / rect.width) * (maxValue - minValue));
        const newValues = [...values];
        newValues[thumbIndex] = closestValue(Math.round(value));

        if (thumbIndex === 0 && newValues[thumbIndex] < newValues[1]) {
            setValues(newValues);
        }

        if (thumbIndex === 1 && newValues[thumbIndex] > newValues[0]) {
            setValues(newValues);
        }
    };

    useEffect(() => {
        const thumbs = Array.from(sliderRef.current.querySelectorAll('.thumb'));
        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('mousedown', (e) => {
                e.preventDefault();
                document.addEventListener('mousemove', (event) => handleThumbMove(event, index));
                document.addEventListener('mouseup', () => {
                    document.removeEventListener('mousemove', (event) => handleThumbMove(event, index));
                });
            });
        });
    }, [values]);

    return (
        <div>
            <input type="number" value={values[0]} onChange={(e) => setValues([Number(e.target.value), values[1]])} />
            <input type="number" value={values[1]} onChange={(e) => setValues([values[0], Number(e.target.value)])} />
            <div className="slider" ref={sliderRef}>
                <div className="track" style={{ left: `${(values[0] - minValue) / (maxValue - minValue) * 100}%`, width: `${(values[1] - values[0]) / (maxValue - minValue) * 100}%` }}></div>
                <div className="thumb" style={{ left: `${(values[0] - minValue) / (maxValue - minValue) * 100}%` }}></div>
                <div className="thumb" style={{ left: `${(values[1] - minValue) / (maxValue - minValue) * 100}%` }}></div>
            </div>
        </div>
    );
};

export default PriceFilter;
