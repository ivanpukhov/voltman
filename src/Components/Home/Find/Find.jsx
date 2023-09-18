import React, { useState } from 'react';
import { data } from './data';  // Подразумевается, что data.js находится в той же директории

const VehicleForm = () => {
    const [vehicleType, setVehicleType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    const handleVehicleTypeChange = (e) => {
        setVehicleType(e.target.value);
        setBrand('');
        setModel('');
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
        setModel('');
    };

    const handleModelChange = (e) => {
        setModel(e.target.value);
    };

    const vehicleTypes = Object.keys(data);
    const brands = vehicleType ? Object.keys(data[vehicleType]) : [];
    const models = brand ? data[vehicleType][brand] : [];

    return (
        <div className="df">
            <div className="findBattery">
                <div className="findBattery_title">
                    Найдите свой <br/>
                    аккумулятор
                </div>
                <div className="findBattery_subtitle">
                    Подбери аккумулятор для своей машины
                </div>
                <form className='findBattery__form'>
                    <select onChange={handleVehicleTypeChange} className='findBattery__input' value={vehicleType}>
                        <option value="" disabled>Select Vehicle Type</option>
                        {vehicleTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>

                    <select onChange={handleBrandChange} className='findBattery__input' value={brand} disabled={!vehicleType}>
                        <option value="" disabled>Select Brand</option>
                        {brands.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}
                    </select>

                    <select onChange={handleModelChange} className='findBattery__input' value={model} disabled={!brand}>
                        <option value="" disabled>Select Model</option>
                        {models.map((model, index) => (
                            <option key={index} value={model}>{model}</option>
                        ))}
                    </select>
                    <select className='findBattery__input' >
                        <option value="" disabled selected>Выберите топливо</option>
                        <option value="" >Бензин</option>
                        <option value="" >Дизель</option>
                    </select>
                </form>

                <div className="findBattery__btn">Найти</div>
            </div>
            <div className="bannerBox">
                <div className="banner baner-yellow">
                    <div className="banner__title">Помочь подобрать аккумулятор?</div>
                    <div className="banner__subtitle">
                        Оставте заявку мы вам перезвоним!
                    </div>
                    <div className="banner__btn">Оставить заявку</div>
                </div>
                <div className="banner banner-white">
                    <div className="banner__title">
                        Спец. условия для оргнаниций и <br/> тендоров
                    </div>
                    <div className="banner__btn">Смотреть условия</div>
                </div>
            </div>
        </div>

    );
};

export default VehicleForm;
