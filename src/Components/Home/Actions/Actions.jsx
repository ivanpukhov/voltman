import one from '../../../assets/img/action__batary.webp'
import two from '../../../assets/img/action__safe.webp'
import three from '../../../assets/img/action__key.webp'

const Actions = () => {
    return (
            <div className="action">
                <div className="block__title">Акции</div>
                <div className="action__box">
                    <div className="action__item">
                        <div className="action__title">
                            Скидка за старый <br/>
                            аккумулятор
                        </div>
                        <div className="action__img">
                            <img src={one} alt=""/>
                        </div>
                        <div className="action__subtitle">
                            Сдайте старый аккамулятор и получите скидку
                        </div>
                        <div className="action__text">
                            Сеть аккумуляторных центров Voltman принимает бывшие в употреблении
                            батареи на утилизацию на лучших..... Далее
                        </div>
                    </div>

                    <div className="action__item">
                        <div className="action__title">Доставка и установка в подарок</div>
                        <div className="action__img action__img-mod">
                            <img src={three} alt=""/>
                        </div>
                        <div className="action__subtitle">Доставка и установка в подарок</div>
                        <div className="action__text">
                            Закажите любой аккумулятор в сети автомагазинов Voltman и получите
                            оперативную доставку и профессиональную..... Далее
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Actions;
