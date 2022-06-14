const pictureInnerContainerLeft = document.querySelector('.picture-inner-container-left');
const pictureInnerContainerCentr = document.querySelector('.picture-inner-container-centr');
const pictureInnerContainerRight = document.querySelector('.picture-inner-container-right');

const animItems = document.querySelectorAll('._anim-items');
 

let wd = window.screen.width;
// console.log(wd);

const mas = ['./assets/img/galery/galery1.jpg',
'./assets/img/galery/galery2.jpg',
'./assets/img/galery/galery3.jpg',
'./assets/img/galery/galery4.jpg',
'./assets/img/galery/galery5.jpg',
'./assets/img/galery/galery6.jpg',
'./assets/img/galery/galery7.jpg',
'./assets/img/galery/galery8.jpg',
'./assets/img/galery/galery9.jpg',
'./assets/img/galery/galery10.jpg',
'./assets/img/galery/galery11.jpg',
'./assets/img/galery/galery12.jpg',
'./assets/img/galery/galery13.jpg',
'./assets/img/galery/galery14.jpg',
'./assets/img/galery/galery15.jpg'];

if (animItems.length >= 1) {
   
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];

            const animItemHeight = animItem.offsetHeight;  /*получаем высоту страницы*/ 
           

            const animItemOffset = offset(animItem).top; /*получаем значение с верху */
            
            const animStart = 20; /*Коофициент регулирующий момент старта анамации*/

            /*настройка момента старта анимации*/
            let animItemPoint = window.innerHeight - animItemHeight / animStart; /*Точка старта от высоты окна браузера отнимаем высоту нашего блока деленную на коофицент */
           
           
            /*Если анимированный объект выше по высоте окна бразера то => перестраиваем момент старта*/
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;  
                
            }
           
            if ((pageYOffset > (animItemOffset - animItemPoint)) && (pageYOffset < (animItemOffset + animItemHeight))) {
                animItem.classList.add('_active'); 
               
            } else {
                animItem.classList.remove('_active'); 
            }
        }

    }
        function offset(el) { /*ф-я которая определяет насколько объект находится ниже чем верх страницы и возвращает координаты top left*/
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
}
animOnScroll();
function shuffle(mas) { // ф-я случайного распределения
    mas.sort(() => Math.random() - 0.5);
  }
  shuffle(mas);

// img.src = `./assets/img/galery/galery1.jpg`;

// pictureInnerContainer.innerHTML = img;
function addImg() {
    for (let i = 0; i < mas.length; i++) {
        if (i<5) {
        const img = document.createElement('img');
        img.classList.add('gallery-img');
        img.alt =`galery`;
        img.src = `${mas[i]}`; 
        pictureInnerContainerLeft.append(img);
        }
        if (i>=5 && i<10) {
            const img = document.createElement('img');
        img.classList.add('gallery-img');
        img.alt =`galery`;
        img.src = `${mas[i]}`; 
        pictureInnerContainerCentr.append(img);
        } 
        if (i>=10 && i<mas.length) {
            const img = document.createElement('img');
        img.classList.add('gallery-img');
        img.alt =`galery`;
        img.src = `${mas[i]}`; 
        pictureInnerContainerRight.append(img);
        } 
        
    }
}
addImg();

