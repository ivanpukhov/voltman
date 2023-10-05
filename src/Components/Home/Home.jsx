import React, {useEffect, useState} from "react";
import axios from "axios";
import BestProducts from "../BestProducts/BestProducts";
import Actions from "./Actions/Actions";
import Reviews from "./Reviews/Reviews";
import about from '../../assets/img/about.webp'
import link from '../../assets/img/link.webp'
import zhumabaev from '../../assets/img/shops/shop__zhumabaev.webp'
import shop4 from '../../assets/img/shops/shop_4.jpeg'
import shop5 from '../../assets/img/shops/shop_5.jpeg'
import zhambyl from '../../assets/img/shops/shop_2.webp'
import koksh from '../../assets/img/shops/koksh.png'
import {Link} from "react-router-dom";
import Find from "./Find/Find";
import nophoto from '../../assets/img/no_photo.webp'

function Df() {
    return (<Find/>

    )
}

const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://voltman.ix-web.site/api/best-products');
            setProducts(response.data.bestProducts);  // Изменено на 'bestProducts'
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (<>
            <div className="container">


                <Df/>


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
                    <BestProducts products={products}/>
                </div>

                <Actions/>
                <a name='action'></a>

                <Reviews/>



                {/*<div className="block__title">Новости</div>*/}
                {/*<div className="news">*/}


                {/*    <div className="news__item">*/}
                {/*        <div className="news__title">*/}
                {/*            График работы магазинов в Алматы и Павлодаре на Новый год*/}
                {/*        </div>*/}
                {/*        <div className="news__date">21.12.2022</div>*/}
                {/*    </div>*/}


                {/*    <div className="news__item">*/}
                {/*        <div className="news__title">*/}
                {/*            В Стамбуле состоялась 8-е собрание аккумуляторных дилеров Казахстана*/}
                {/*        </div>*/}
                {/*        <div className="news__date">21.12.2022</div>*/}
                {/*    </div>*/}
                {/*    <div className="news__item">*/}
                {/*        <div className="news__title">*/}
                {/*            В Алматы прошло крупнейшее в Казахстане автошоу*/}
                {/*        </div>*/}
                {/*        <div className="news__date">21.12.2022</div>*/}
                {/*    </div>*/}


                {/*    <div className="news__item">*/}
                {/*        <div className="news__title">*/}
                {/*            Результаты третьего «Марафона на миллион»*/}
                {/*        </div>*/}
                {/*        <div className="news__date">21.12.2022</div>*/}
                {/*    </div>*/}


                {/*    <div className="news__item">*/}
                {/*        <div className="news__title">*/}
                {/*            Результаты второго «Марафона на миллион»*/}
                {/*        </div>*/}
                {/*        <div className="news__date">21.12.2022</div>*/}
                {/*    </div>*/}


                {/*    <div className="news__item">*/}
                {/*        <div className="news__title">Расширение сети Voltman в Алматы!</div>*/}
                {/*        <div className="news__date">21.12.2022</div>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>

            <div className="map">
                <div className="map__info">
                    <div className="map__title">Voltman на карте</div>
                    <div className="map__box">
                        <div className="map__block">
                            <div className="map__name">Место:</div>
                            <div className="map__content">
                                Улица Магжана Жумабаева, 107
                            </div>
                        </div>
                        <div className="map__block">
                            <div className="map__name">Телефон:</div>
                            <div className="map__content">+7‒705‒872‒96‒30</div>
                        </div>
                        <div className="map__block">
                            <div className="map__name">Время работы:</div>
                            <div className="map__content">Ежедневно: 9:00-19:00</div>
                        </div>
                        <div className="map__btn"><a href="https://yandex.kz/maps/-/CDURRSis"
                                                     style={{color: "inherit"}}>Перейти на Я.Карты</a></div>
                    </div>

                </div>
            </div>

            <a name='map'></a>

            <div className="container">
                <div className="block__title">Наши магазины</div>
                <div className="shops">
                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={zhambyl} alt="shop image"/>
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
                            <div className="shops__adress">г. Петропавловск Улица Жамбыла Жабаева, 262</div>
                            <div className="shops__phone">+7‒705‒344‒70‒49</div>
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
                            <div className="shops__adress">г. Петропавловск Улица Магжана Жумабаева, 107</div>
                            <div className="shops__phone">+7‒705‒344‒70‒49</div>
                            <div className="shop">
                                <div className="shops__days shops__days-time">
                                    <div className="shops__day">Пн - Пт:</div>
                                    <div className="shop__time">9:00 - 19:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Cб - Вс:</div>
                                    <div className="shop__time">выходной</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={nophoto} alt="shop image"/>
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
                            <div className="shops__adress">г. Петропавловск Улица Ярослава Гашека, 27</div>
                            <div className="shops__phone">+7‒705‒344‒70‒49</div>
                            <div className="shop">
                                <div className="shops__days shops__days-time">
                                    <div className="shops__day">Пн - Пт:</div>
                                    <div className="shop__time">9:00 - 17:30</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Cб - Вс:</div>
                                    <div className="shop__time">выходной</div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={shop4} alt="shop image"/>
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
                            <div className="shops__adress">с. Новоишимское, ул Аблай хана 14</div>
                            <div className="shops__phone">+7 7153 521 640</div>
                            <div className="shop">
                                <div className="shops__days shops__days-time">
                                    <div className="shops__day">Пн - Пт:</div>
                                    <div className="shop__time">9:00 - 18:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Cб:</div>
                                    <div className="shop__time">9:00 - 13:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Вс:</div>
                                    <div className="shop__time">выходной</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={shop5} alt="shop image"/>
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
                            <div className="shops__adress">г. Тайынша, пер. Центральный д.7Б</div>
                            <div className="shops__phone">+7 71536 21 788</div>
                            <div className="shop">
                                <div className="shops__days shops__days-time">
                                    <div className="shops__day">Пн - Пт:</div>
                                    <div className="shop__time">9:00 - 18:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Cб:</div>
                                    <div className="shop__time">9:00 - 13:00</div>
                                </div>
                                <div className="shops__days">
                                    <div className="shops__day">Вс:</div>
                                    <div className="shop__time">выходной</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shops__item">
                        <div className="shops__top">
                            <div className="shops__img">
                                <img src={koksh} alt="shop image"/>
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
                            <div className="shops__adress">г. Кокшетау ул. О. Куанышева, 170/1</div>
                            <div className="shops__phone">+7 747 510 84 49</div>
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
