document.addEventListener("DOMContentLoaded", function() {
    // Инициализация переменных
    let index = 0;
    const items = document.querySelectorAll('.slider__item');
    const nextButton = document.querySelector('.slider__button--next');
    const prevButton = document.querySelector('.slider__button--prev');
    const dotsContainer = document.querySelector('.slider__dots');

    // Функция для показа слайда
    function showSlide(i) {
        items.forEach(item => item.classList.remove('slider__item--active'));
        items[i].classList.add('slider__item--active');
    }

    // Функция для обновления кругляшек
    function updateDots(i) {
        const dots = document.querySelectorAll('.slider__dot');
        dots.forEach(dot => dot.classList.remove('slider__dot--active'));
        dots[i].classList.add('slider__dot--active');
    }

    // Добавляем кругляшки
    items.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('slider__dot');
        dot.addEventListener('click', () => {
            index = i;
            showSlide(index);
            updateDots(index);
        });
        dotsContainer.appendChild(dot);
    });

    // Инициализация слайдера и кругляшек
    showSlide(index);
    updateDots(index);

    // Обработчики событий для кнопок
    nextButton.addEventListener('click', () => {
        index = (index + 1) % items.length;
        showSlide(index);
        updateDots(index);
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + items.length) % items.length;
        showSlide(index);
        updateDots(index);
    });

    // Обработчики событий для свайпа
    let touchStartX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].clientX;
    });

    document.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].clientX;
        let delta = touchStartX - touchEndX;

        if (delta > 100) {
            nextButton.click();
        } else if (delta < -100) {
            prevButton.click();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hum = document.getElementById("hum");
    hum.addEventListener("change", function() {
        if(this.checked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });
});

