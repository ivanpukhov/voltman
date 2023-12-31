import React from 'react';

const CategoryFilter = ({ options, classname, selectedValue, onFilterChange }) => {
    if (!options) {
        return null;
    }

    const handleCategoryChange = event => {
        const value = event.target.value;
        onFilterChange('category_id', value);
    };

    return (
        <div  className={classname}>
            <div>
                <input
                    id="all-categories"
                    className="dn"
                    type="checkbox"
                    value=""
                    checked={selectedValue === ''}
                    onChange={() => handleCategoryChange({ target: { value: '' } })}
                />
                <label className='categor__item' htmlFor="all-categories">Все</label>
            </div>
            {options.map(option => (
                option.name !== "EFB Технология" && (
                    <div  key={option.id}>
                        <input
                            id={`category-${option.id}`}
                            type="checkbox"
                            value={option.id}
                            checked={selectedValue === option.id}
                            onChange={() => handleCategoryChange({ target: { value: option.id } })}
                            className="dn"
                        />
                        <label className='categor__item' htmlFor={`category-${option.id}`}>{option.name}</label>
                    </div>
                )
            ))}

        </div>
    );
};

export default CategoryFilter;
