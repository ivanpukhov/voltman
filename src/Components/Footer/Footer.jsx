import cards from '../../assets/img/cards.svg'
import twitter from '../../assets/img/twitter.svg'
import facebook__icon from '../../assets/img/facebook__icon.svg'
import insta__icon from '../../assets/img/insta__icon.svg'
import vk__icons from '../../assets/img/vk__icon.svg'


const PHONE_NUMBER = '8 (7152) 501-777';
const PHONE_LINK = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;

const Footer = () =>(

    <footer className="footer">
        <div className="container">
            <div className="footer__top">
                <div className="footer__left">
                    <div className="footer__title">О компании</div>
                    <div className="footer__menu">
                        <div className="footer__menu-left">
                            <div className="footer__menu-item">Обращение руководителя</div>
                            <div className="footer__menu-item">О компании</div>
                            <div className="footer__menu-item">Наши поставщики</div>
                            <div className="footer__menu-item">Сотрудничество</div>
                            <div className="footer__menu-item">Вакансии</div>
                            <div className="footer__menu-item">Публичная оферта</div>
                        </div>
                        <div className="footer__menu-right">
                            <div className="footer__menu-item">
                                Политика конфиденциальности
                            </div>
                            <div className="footer__menu-item">Медиа</div>
                            <div className="footer__menu-item">Отзывы</div>
                            <div className="footer__menu-item">Наши услуги</div>
                            <div className="footer__menu-item">Блог</div>
                        </div>
                    </div>
                </div>
                <div className="footer__right">
                    <div className="footer__search">
                        <input type="text" placeholder="Найти на Voltman"/>
                    </div>
                    <div className="footer__contacts">
                        <div className="footer__number">+7 778 021 24 28</div>
                        <div className="footer__btn">Обратный звонок</div>
                    </div>
                    <div className="footer__adress">
                        пр. Абая, 138/2, уг. ул. Тургута Озала (рядом с ЖК "Гаухар Тас")
                    </div>
                    <div className="footer__mail">info@voltman.kz</div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__copyrigth">
                    © 2023 Voltman, Все права защищены
                </div>
                <div className="footer__social">
                    <div className="footer__social-icon">
                        <img src={vk__icons} alt=""/>
                    </div>
                    <div className="footer__social-icon">
                        <img src={insta__icon} alt=""/>
                    </div>
                    <div className="footer__social-icon">
                        <img src={facebook__icon} alt=""/>
                    </div>
                    <div className="footer__social-icon">
                        <img src={twitter} alt=""/>
                    </div>
                </div>
                <div className="footer__cardSystem">
                    <img src={cards} alt=""/>
                </div>
            </div>
        </div>
    </footer>

);

    export default Footer;
