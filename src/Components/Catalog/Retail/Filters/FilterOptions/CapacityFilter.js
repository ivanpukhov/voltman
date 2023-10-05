import React, { useState, useRef } from 'react';

const findMinMax = options_capacity_ah => {
    const minValue = Math.min(...options_capacity_ah);
    const maxValue = Math.max(...options_capacity_ah);
    return { minValue, maxValue };
};

const CapacityFilter = ({ selectedValue, onFilterChange }) => {
    const options_capacity_ah = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250];
    const { minValue, maxValue } = findMinMax(options_capacity_ah);

    const [values, setValues] = useState([
        selectedValue.min_capacity_ah || minValue,
        selectedValue.max_capacity_ah || maxValue
    ]);
    const sliderRef = useRef(null);

    const handleCapacityChange = (newValues) => {
        onFilterChange('min_capacity_ah', newValues[0]);
        onFilterChange('max_capacity_ah', newValues[1]);
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
            handleCapacityChange(newValues);
        };

        document.addEventListener('mousemove', moveListener);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveListener);
        });
    };

    return (
        <div>
            <label className='filters__title'>Емкость, Ач: </label>
            <div className="filters__price">
                <input
                    type="text"
                    value={values[0]}

                    onChange={(e) => {
                        const newValues = [Number(e.target.value), values[1]];
                        setValues(newValues);
                        handleCapacityChange(newValues);
                    }}
                />
                <input
                    type="text"
                    value={values[1]}
                    onChange={(e) => {
                        const newValues = [values[0], Number(e.target.value)];
                        setValues(newValues);
                        handleCapacityChange(newValues);
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

export default CapacityFilter;
