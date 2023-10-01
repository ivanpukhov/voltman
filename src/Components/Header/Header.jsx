import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.webp';
import boss from '../../assets/img/boss.webp';
import humbur from '../../assets/img/humburger.webp';
import search from '../../assets/img/search.webp';
import {useAuth} from '../../AuthContext';
import React, {useState, useEffect} from 'react';
import Products from "../Products/Products";
import xx from '../../assets/img/xx.webp'
import Call from "../Call";

const PHONE_NUMBER = '8 (7152) 501-777';
const PHONE_LINK = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            if (searchQuery.length > 2) {
                const response = await fetch(`http://31.129.108.131:3001/api/search?query=${searchQuery}`);
                const data = await response.json();
                if (data.products) {
                    setSearchResults(data.products);
                }
            } else {
                setSearchResults([]);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchResults();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (<div className="header__search">
        <input type="text" placeholder="Введите модель для поиска" value={searchQuery}
               onChange={handleInputChange}/>
        {searchResults.length > 0 && (<div className="search-results">
            <ul>
                <Products products={searchResults}/>
            </ul>
        </div>)}
    </div>);
};

const Header = () => {
    const {token} = useAuth();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    };

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        if (!isMenuVisible) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    };


    return (<div className='container'>
        <header className="header">
            <Link className="header__logo" to={'/'}>
                <div className="header__logo-img">
                    <img src={logo} alt="Voltman Logo"/>
                </div>
                <div className="header__logo-prefix">
                    <img src={boss} alt=""/>
                </div>
            </Link>
            <SearchComponent/>
            <div className="header__login-btn">
                {token ? (<Link to="/orders">Заказы</Link>) : (<Link to="/login">Вход</Link>)}
            </div>
            <div className="header__contacts">
                <div className="header__contacts-number">
                    {PHONE_NUMBER}
                </div>
                <Call/>
            </div>
        </header>

        <header className="header__mobile">
            <div className="header__mobile-top">
                <div onClick={toggleSearch}>
                    <div className="search">
                        {!isSearchVisible ? (<img src={search} alt="Open Search"/>) : (
                            <img src={xx} className='xs' alt="Close Search"/>)}
                    </div>
                </div>

                {isSearchVisible && (<>
                    <SearchComponent/>
                    <div className="close-search" onClick={toggleSearch}>
                        <img src={xx} className='xs' alt="Close Search"/>
                    </div>
                </>)}
                <Link to={'/'}>
                    <div className="header__logo-mobile">
                        <img src={logo} alt="Voltman Logo"/>
                    </div>
                </Link>
                <div className="humburger" onClick={toggleMenu}>
                    <img src={humbur} alt=""/>
                </div>
            </div>

            {isMenuVisible && (<div className="menu-hum">
                <Link className="menu__item" to={'/catalog/'} onClick={closeMenu}>Каталог</Link>
                <Link className="menu__item" to={'/catalog/'} onClick={closeMenu}>Аккумуляторы по розничным
                    ценам</Link>
                <Link className="menu__item" to={'/wholesale/'} onClick={closeMenu}>Аккумуляторы по оптовым
                    ценам</Link>
            </div>)}
        </header>

        <div className="menu">
            <Link to={'/catalog'}>
                <div className="menu__item menu__active">Каталог</div>
            </Link>
            <a href="/#action">
                <div className="menu__item">Акции</div>
            </a>
            <div className="menu__item">Блог</div>
            <a href="/#map">
                <div className="menu__item">Контакты</div>
            </a>
        </div>
    </div>);
};

export default Header;
