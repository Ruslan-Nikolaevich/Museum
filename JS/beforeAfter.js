const container = document.querySelector('.containerSliderBeforeAfter');
const slider = document.querySelector('.wrapper-explore-slider');
const before = document.querySelector('.slider-explore-before');
const beforeImg = before.querySelector('img');
const change = document.querySelector('.change-explore');
const changeExploreImg = document.querySelector('.change-explore-img');
let isActive = false;
let scrWindow = window.screen.width;

if (scrWindow <= 768) {
    changeExploreImg.src = './assets/img/slider/exploreSlider768.svg'
}

const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x,slider.offsetWidth));  // Здвиг относительно оси х прокрутки
    before.style.width = `${shift}px`;     //устанавливаем ширину div before
    change.style.left = `${shift-20}px`;  // сдвигаем полоску на то же растояние
    
    }
    const pauseEvents = (e) => {
        e.stopPropagation();
        e.preventDefault();
        return false;
        };

container.addEventListener('mouseup', () => {  // мышь отжата
    isActive = false
    });
container.addEventListener('mousedown', () => { // мышь нажата
        isActive =true;
    });
container.addEventListener('mouseleave', () => { // мышь за пределами контенера
        isActive = false
    });
container.addEventListener('mousemove',(e) =>{
    if (!isActive) {
        return;
    }
    let x = e.pageX;
    x-=slider.getBoundingClientRect().left; //уменьшаем (двигаем) 
    beforeAfterSlider(x); 
    pauseEvents(e);
});    