import React, { useState } from 'react';
import { data } from './data';  // Подразумевается, что модифицированный data.js находится в той же директории
import Consolt from "../../Consult";
import {Link} from "react-router-dom";

const VehicleForm = () => {
    const [vehicleType, setVehicleType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [maxCapacity, setMaxCapacity] = useState(null);
    const [minCapacity, setMinCapacity] = useState(null);

    const handleVehicleTypeChange = (e) => {
        setVehicleType(e.target.value);
        setBrand('');
        setModel('');
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
        setModel('');
        // Set max and min capacity based on the selected brand
        const brandData = data[vehicleType][e.target.value];
        if (brandData && brandData.max && brandData.min) {
            setMaxCapacity(brandData.max);
            setMinCapacity(brandData.min);
        }
    };

    const handleModelChange = (e) => {
        setModel(e.target.value);
    };

    const vehicleTypes = Object.keys(data);
    const brands = vehicleType ? Object.keys(data[vehicleType]) : [];
    const models = brand ? data[vehicleType][brand].models : [];

    const linkTo = model ? `/catalog?max_capacity_ah=${maxCapacity}&min_capacity_ah=${minCapacity}` : '#';

    return (
        <div className="df">
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
                            <option value="" >Выберите тип автомобиля</option>
                            {vehicleTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>

                        <select onChange={handleBrandChange} className='findBattery__input' value={brand} disabled={!vehicleType}>
                            <option value="" >Марка автомобиля</option>
                            {brands.map((brand, index) => (
                                <option key={index} value={brand}>{brand}</option>
                            ))}
                        </select>

                        <select onChange={handleModelChange} className='findBattery__input' value={model} disabled={!brand}>
                            <option value="" >Модель автомобиля</option>
                            {models.map((model, index) => (
                                <option key={index} value={model}>{model}</option>
                            ))}
                        </select>
                        <select className='findBattery__input' >
                            <option value="" >Выберите топливо</option>
                            <option value="" >Бензин</option>
                            <option value="" >Дизель</option>
                        </select>
                    </form>
                    <Link className="findBattery__btn" to={linkTo} disabled={!model}>Найти</Link>

                </div>
                <div className="bannerBox">
                    <div className="banner baner-yellow">
                        <div className="banner__title">Помочь подобрать аккумулятор?</div>
                        <div className="banner__subtitle">
                            Оставьте заявку мы вам перезвоним!
                        </div>
                        <Consolt />
                    </div>
                    <div className="banner banner-white">
                        <div className="banner__title">
                            Спец. условия для организаций и <br/> тендоров
                        </div>
                        <div className="banner__btn"><a href="https://voltman.kz/clients/corporative-clients/" style={{color: "inherit"}}>Смотреть условия</a></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VehicleForm;
