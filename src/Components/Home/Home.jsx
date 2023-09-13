import React, {useEffect, useState} from "react";
import axios from "axios";
import Products from "../Products/Products";
import Actions from "./Actions/Actions";
import Reviews from "./Reviews/Reviews";
import about from '../../assets/img/about.svg'
import link from '../../assets/img/link.svg'
import zhumabaev from '../../assets/img/shops/shop__zhumabaev.svg'
import {Link} from "react-router-dom";
import s from "../../App.module.css";

const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/best-products');
            setProducts(response.data.bestProducts);  // Изменено на 'bestProducts'
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="container">

                <div className="menu">
                    <div className="menu__item menu__active">Каталог</div>
                    <div className="menu__item">Акции</div>
                    <div className="menu__item">Блог</div>
                    <div className="menu__item">Контакты</div>
                </div>
                <div className="df">
                    <div className="findBattery">
                        <div className="findBattery_title">
                            Найдите свой <br/>
                            аккумулятор
                        </div>
                        <div className="findBattery_subtitle">
                            Подбери аккумулятор для своей машины
                        </div>
                        <div className="findBattery__form">
                            <input
                                type="text"
                                className="findBattery__input"
                                placeholder="Тип автомобиля"
                            />
                            <input
                                type="text"
                                className="findBattery__input"
                                placeholder="Марка"
                            />
                            <input
                                type="text"
                                className="findBattery__input"
                                placeholder="Марка"
                            />
                            <input
                                type="text"
                                className="findBattery__input"
                                placeholder="Тип топлива"
                            />
                        </div>
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
                <div className="productSelect">
                    <div className="productSelect__title">
                        В <span style={{color: "#FFF200"}}>Voltman</span> аккумуляторы можно
                        приобрести в розницу и оптом:
                    </div>
                    <div className="productSelect__box">
                        <Link className="productSelect__item" to={'/catalog/'}>
                            Товары в розницу
                        </Link>
                        <Link className="productSelect__item" to={'/wholesale'}>
                            Товары оптом
                        </Link>

                    </div>
                </div>
                <div className="bestProduct">
                    <div className="bestProduct__title">Выбор покупателей</div>
                    <div className="bestProduct__subtitle">
                        Аккумуляторы для легковых автомобилей
                    </div>
                    <Products products={products}/>
                </div>
                <Actions/>
                <Reviews/>

                <div className="about">
                    <div className="about__image">
                        <img src={about} alt=""/>
                    </div>
                    <div className="about__content">
                        <div className="about__title">
                            Voltman - аккумуляторы в Петропавловскме
                        </div>
                        <div className="about__subtitle">О компании</div>
                        <div className="about__text">
                            <p>
                                Сеть автомагазинов Voltman входит в состав аккумуляторной компании
                                «Алатау», которая является крупнейшим казахстанским дилером
                                аккумуляторов и комплектующих.
                            </p>
                            <p>
                                На сегодняшний день компания занимает треть национального вторичного
                                рынка аккумуляторных батарей. Исходя из объективных торговых
                                показателей, компании была вручена премия «Лидер отрасли»,
                                подтверждающая успех на общенациональном уровне. Также достижения
                                отмечены первенством в рейтинге импортирующих организаций Республики
                                и активным участием в учреждении Ассоциации аккумуляторных дилеров в
                                Казахстане.
                            </p>
                            <p>
                                Автомобильных магазинов Voltman, входящих в состав единой сети,
                                становится всё больше. За счёт активного развития точек продаж стало
                                уже более полусотни. Они представлены в городах Алматы, Нур-Султан,
                                Павлодар, Усть-Каменогорск, Семей, Караганда, Кокшетау,
                                Петропавловск, Костанай, Актобе, Атырау, Актау, Кызылорда, Тараз,
                                Бишкек, а ещё — в Риддере, Мерке и Кордае. Обратившись к официальным
                                представителям компании «Алатау», найти фирменную продукцию можно
                                также на территории Шымкента, Туркестана, Уральска, Талдыкоргана.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="block__title">Новости</div>
                <div className="news">
                    <div className="news__item">
                        <div className="news__title">
                            График работы магазинов в Алматы и Павлодаре на Новый год
                        </div>
                        <div className="news__date">21.12.2022</div>
                    </div>
                    <div className="news__item">
                        <div className="news__title">
                            В Стамбуле состоялась 8-е собрание аккумуляторных дилеров Казахстана
                        </div>
                        <div className="news__date">21.12.2022</div>
                    </div>
                    <div className="news__item">
                        <div className="news__title">
                            В Алматы прошло крупнейшее в Казахстане автошоу
                        </div>
                        <div className="news__date">21.12.2022</div>
                    </div>
                    <div className="news__item">
                        <div className="news__title">
                            Результаты третьего «Марафона на миллион»
                        </div>
                        <div className="news__date">21.12.2022</div>
                    </div>
                    <div className="news__item">
                        <div className="news__title">
                            Результаты второго «Марафона на миллион»
                        </div>
                        <div className="news__date">21.12.2022</div>
                    </div>
                    <div className="news__item">
                        <div className="news__title">Расширение сети Voltman в Алматы!</div>
                        <div className="news__date">21.12.2022</div>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="map__info">
                    <div className="map__title">Voltman на карте</div>
                    <div className="map__box">
                        <div className="map__block">
                            <div className="map__name">Место:</div>
                            <div className="map__content">
                                пр. Абая, 138/2, уг. ул. Тургута Озала <br/> (рядом с ЖК "Гаухар
                                Тас")
                            </div>
                        </div>
                        <div className="map__block">
                            <div className="map__name">Телефон:</div>
                            <div className="map__content">+7 778 021 24 28</div>
                        </div>
                        <div className="map__block">
                            <div className="map__name">Время работы:</div>
                            <div className="map__content">Ежедневно: 8:00-20:00</div>
                        </div>
                        <div className="map__btn">Перейти на Я.Карты</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="block__title">Наши магазины в Петропавловске</div>
                <div className="shops">
                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={zhumabaev} alt="shop image"/>
                            </div>
                            <div className="shops__link">
                                <img src={link} alt="link"/>
                                <br/>
                                <p>
                                    Показать <br/> на карте
                                </p>
                            </div>
                        </div>
                        <div className="shops__content">
                            <div className="shops__adress">ул. Жумабаева, 107</div>
                            <div className="shops__phone">+7 7152 50 17 77</div>
                            <div className="shop">
                                <div className="shops__days shops__days-time">
                                    <div className="shops__day">Пн - Пт:</div>
                                    <div className="shop__time">9:00 - 19:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Cб - Вс:</div>
                                    <div className="shop__time">10:00 - 17:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={zhumabaev} alt="shop image"/>
                            </div>
                            <div className="shops__link">
                                <img src={link} alt="link"/>
                                <br/>
                                <p>
                                    Показать <br/> на карте
                                </p>
                            </div>
                        </div>
                        <div className="shops__content">
                            <div className="shops__adress">ул. Жумабаева, 107</div>
                            <div className="shops__phone">+7 7152 50 17 77</div>
                            <div className="shop">
                                <div className="shops__days shops__days-time">
                                    <div className="shops__day">Пн - Пт:</div>
                                    <div className="shop__time">9:00 - 19:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Cб - Вс:</div>
                                    <div className="shop__time">10:00 - 17:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={zhumabaev} alt="shop image"/>
                            </div>
                            <div className="shops__link">
                                <img src={link} alt="link"/>
                                <br/>
                                <p>
                                    Показать <br/> на карте
                                </p>
                            </div>
                        </div>
                        <div className="shops__content">
                            <div className="shops__adress">ул. Жумабаева, 107</div>
                            <div className="shops__phone">+7 7152 50 17 77</div>
                            <div className="shop">
                                <div className="shops__days shops__days-time">
                                    <div className="shops__day">Пн - Пт:</div>
                                    <div className="shop__time">9:00 - 19:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Cб - Вс:</div>
                                    <div className="shop__time">10:00 - 17:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={zhumabaev} alt="shop image"/>
                            </div>
                            <div className="shops__link">
                                <img src={link} alt="link"/>
                                <br/>
                                <p>
                                    Показать <br/> на карте
                                </p>
                            </div>
                        </div>
                        <div className="shops__content">
                            <div className="shops__adress">ул. Жумабаева, 107</div>
                            <div className="shops__phone">+7 7152 50 17 77</div>
                            <div className="shop">
                                <div className="shops__days shops__days-time">
                                    <div className="shops__day">Пн - Пт:</div>
                                    <div className="shop__time">9:00 - 19:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Cб - Вс:</div>
                                    <div className="shop__time">10:00 - 17:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Home;