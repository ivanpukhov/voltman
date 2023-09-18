import React, { useEffect } from 'react';
import Select from 'react-select';

const SortFilterWithReactSelect = ({ selectedSort, onSortChange }) => {
    const sortOptions = [
        { label: 'Цена (по возрастанию)', value: { field: 'retail_price', order: 'asc' } },
        { label: 'Цена (по убыванию)', value: { field: 'retail_price', order: 'desc' } },
        { label: 'По алфавиту (А-Я)', value: { field: 'name', order: 'asc' } },
        { label: 'По популярности', value: { field: 'views', order: 'desc' } } // Добавлена эта строка
    ];

    // Устанавливаем значение по умолчанию при первом рендере
    useEffect(() => {
        if (!selectedSort) {
            onSortChange({ field: 'views', order: 'desc' });
        }
    }, [selectedSort, onSortChange]);

    const handleChange = selectedOption => {
        onSortChange(selectedOption.value);
    };

    return (
        <div className='sortBy'>
            <div className="hidden">
                Сортировка:
            </div>
            <Select
                value={selectedSort ? sortOptions.find(option => option.value.field === selectedSort.field && option.value.order === selectedSort.order) : null}
                onChange={handleChange}
                options={sortOptions}
                classNamePrefix="custom-select-1"

            />
        </div>
    );
};

export default SortFilterWithReactSelect;
