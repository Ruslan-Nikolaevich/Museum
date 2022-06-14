const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const currentSlider = document.getElementById('current-slider');
const sliderTrack = document.querySelector('.sliderTrack');
let index = 0;


function activeSlide(direction) { //работаем с активным слайдом
    hideItems(direction);
    
}

function hideItems(direction) { // ф-я для скрытия слайда
    slides[index].classList.add(direction);
    slides[index].addEventListener('animationend',function () {
       this.classList.remove('active',direction);
    });

}
function showItems(direction) { // ф-я для показа слайда
    slides[index].classList.add('next',direction);
    slides[index].addEventListener('animationend',function () {
        this.classList.remove('next',direction);
        this.classList.add('active');
    });
}

// function activeSlide(n) {
//     for (let slide  of slides) {
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }
function activeDot(n) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
        // activeSlide(index);
        activeDot(index);
        showItems('from-left');
        currentSlider.innerHTML = `0${index+1}`;
    } else {
        index++;
        // activeSlide(index);
        activeDot(index);
        showItems('from-left');
        currentSlider.innerHTML = `0${index+1}`;
    }
}
function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
        // activeSlide(index);
        activeDot(index);
        showItems('from-right');
        currentSlider.innerHTML = `0${index+1}`;
    } else {
        index--;
        // activeSlide(index);
        activeDot(index);
        showItems('from-right');
        currentSlider.innerHTML = `0${index+1}`;
    }
}
dots.forEach(function (spanDots,indexDots) {
    spanDots.addEventListener('click',() => {
        hideItems('to-right')
        index = indexDots;
        showItems('from-left');
        activeDot(index);
        currentSlider.innerHTML = `0${index+1}`;
    });
});

next.addEventListener('click',function () {
    console.log("нажал next");
    hideItems('to-right');
    nextSlide();
} );
prev.addEventListener('click',function () {
    console.log("нажал prev");
    hideItems('to-left');
    prevSlide();
} );

const swiperdetector = (el) => {
    let surface = el; 

    let startX = 0;// начальная точка на оси Х
    let startY = 0;// начальная точка на оси Y
    let distX = 0; //пройденная дистанция по оси Х
    let distY = 0; //пройденная дистанция по оси Y


    let starTime = 0; //Время при котором произошло нажатие на клавишу мышки
    let elapsedTime = 0; //Время в течении которого нажата мышка

    let threshold = 150; // дистанция которая будет определять будем делать свайп или нет
    let restraint = 100; // задаем максимальное отклонение мышьки по оси Y
    let allowedTime = 500; //Время в течении которого должен длится свайп

    surface.addEventListener('mousedown', function(e) { // нажатие мышки
        startX = e.pageX;  //получаем начальную координату при нажатии
        startY = e.pageY; //получаем начальную координату при нажатии
        starTime = new Date().getTime(); //получаем время нажатия
        e.preventDefault();
    });

    surface.addEventListener('mouseup', function(e) { // отжал кнопку мышки
        distX = e.pageX - startX;  //получаем дистанцию пройденную мышкой по Х
        distY = e.pageY - startY; //получаем дистанцию пройденную мышкой по У
        elapsedTime = new Date().getTime() - starTime; //получаем время нажатия
        if (elapsedTime <= allowedTime) { // если время свайпа меньше задданного времени то все норм и смотрим другие параметры
            if (Math.abs(distX) > threshold && Math.abs(distY) < restraint) { // тут смотрим пройденную дистанцию по оси х она должна быть больше заданной
                if (distX > 0) {
                    hideItems('to-right');
                    nextSlide();
                }
                if (distX < 0) {
                    hideItems('to-left');
                    prevSlide();
                }

            }
        }
        e.preventDefault();
    });
}

swiperdetector(sliderTrack);