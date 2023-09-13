import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.svg'
import boss from '../../assets/img/boss.svg'
import humbur from '../../assets/img/humburger.svg'
import search from '../../assets/img/search.svg'

const PHONE_NUMBER = '8 (7152) 501-777';
const PHONE_LINK = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;

const Header = () =>( <div className='container'>
        <header className="header">
            <div className="header__logo">
                <div className="header__logo-img">
                    <img src={logo} alt="Voltman Logo"/>
                </div>
                <div className="header__logo-prefix">
                    <img src={boss} alt=""/>
                </div>
            </div>
            <div className="header__search">
                <input type="text"/>
            </div>
            <div className="header__login-btn">
                Вход
            </div>
            <div className="header__contacts">
                <div className="header__contacts-number">
                    +7 778 168 55 94
                </div>
                <div className="header__contacts-link">
                    Заказать звонок
                </div>
            </div>
        </header>
        <header className="header__mobile">
            <div className="search">
                <img src={search} alt=""/>
            </div>
            <div className="header__logo-mobile">
                <img src={logo} alt="Voltman Logo"/>
            </div>
            <input type="checkbox" id="hum" />
                <label htmlFor="hum" className="humburger">
                    <img src={humbur} alt=""/>


                </label>
                <div className="hum__block">
                    <header className="header__mobile">
                        <div className="search">
                            <img src={search} alt="" />
                        </div>
                        <div className="header__logo-mobile">
                            <img src={logo} alt="Voltman Logo"/>
                        </div>
                        <label htmlFor="hum" className="humburger">
                            <img src={humbur} alt="" />
                        </label>
                    </header>
                    <div className="hum__title-block">
                        Каталог
                    </div>
                    <div className="hum__item">Аккумуляторы для легковых автомобилей</div>
                    <div className="hum__item">Аккумуляторы для грузовых автомобилей</div>
                    <div className="hum__item">Аккумуляторы для мотоциклов</div>
                </div>
        </header>
    </div>
);

    export default Header;
