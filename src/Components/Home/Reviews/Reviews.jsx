import React, {useState, useEffect} from 'react';
import photo from '../../../assets/img/review.svg'
import next from '../../../assets/img/next.svg'
import prewiew from '../../../assets/img/prewiew.svg'

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const sliderItems = [
        {
            name: 'Ерлан',
            text: 'Доставили в тот же день без проволочек и лишних слов. Спасибо огромное за быстрое и вежливое обслуживание.',
            image: {photo}
        }, {
            name: 'не Ерлан',
            text: 'Доставили в тот же день без проволочек и лишних слов. Спасибо огромное за быстрое и вежливое обслуживание.',
            image: {photo}
        }, {
            name: 'тоже Ерлан',
            text: 'Доставили в тот же день без проволочек и лишних слов. Спасибо огромное за быстрое и вежливое обслуживание.',
            image: 'assets/img/review.svg'
        },
        // добавьте остальные слайды по аналогии
    ];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.changedTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        const delta = touchStart - touchEnd;

        if (delta > 100) {
            nextSlide();
        } else if (delta < -100) {
            prevSlide();
        }
    };

    useEffect(() => {
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [touchStart]);

    return (
        <>
            <div className="slider">
                <button className="slider__button slider__button--prev" onClick={prevSlide}>
                    <img src={prewiew} alt=""/>
                </button>
                <div className="slider__container">
                    {sliderItems.map((item, i) => (
                        <div className={`slider__item ${i === index ? 'slider__item--active' : ''}`} key={i}>
                            <img src={photo} alt="Фото" className="slider__image"/>
                            <p className="slider__name">{item.name}</p>
                            <p className="slider__text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <button className="slider__button slider__button--next" onClick={nextSlide}>
                    <img src={next} alt=""/>
                </button>

            </div>
            <div className="slider__dots hidden">
                {sliderItems.map((_, i) => (
                    <div
                        className={`slider__dot ${i === index ? 'slider__dot--active' : ''}`}
                        onClick={() => setIndex(i)}
                        key={i}
                    />
                ))}
            </div>
        </>
    );
};

export default Reviews;
