const btnPrevVideo = document.querySelector('.btn-prev-vodeo-slider');
const btnNextVideo = document.querySelector('.btn-nex-vodeo-slider');
const dotsVideo = document.querySelectorAll('.video-dots')
const slideVideo = document.querySelectorAll('.slide-video');
const slideVideoImg = document.querySelectorAll('.slide-video-img');

let indexVideo = 0;
let masIndexVideo = [0,0,0];
const masSlide = ['./assets/video/slide1.jpg',
'./assets/video/slide2.jpg',
'./assets/video/slide3.jpg',
'./assets/video/slide4.jpg',
'./assets/video/slide5.jpg'
];

console.log('lkbyf'+masSlide.length);
function activeDotVideo(n) {
    for (let dot of dotsVideo) {
        dot.classList.remove('activeVideoDots');
    }
    dotsVideo[n].classList.add('activeVideoDots');
}

dotsVideo.forEach(function (spanDots,indexDots) {
    spanDots.addEventListener('click',() => {
        // hideItems('to-right')
        indexVideo = indexDots;
        showItemsVideo();
        activeDotVideo(indexVideo);
    });
});

// function hideItemsVideo(direction) { // ф-я для скрытия слайда
    
//     for(let i = 0;i < slideVideoImg.length; i++ ){
//         // slideVideo[i].classList.add(direction);
//         slideVideo[i].addEventListener('animationend',function () {
//             this.classList.remove('_active-slide-video',direction);
//          });
//     }

// }
function hideItemsVideo() { // ф-я для скрытия слайда
    for(let i = 0;i < slideVideoImg.length; i++ ){

        slideVideo[i].remove('_active-slide-video');
    }

}

function indexDiv(indexVideo,i) { //ф-я для вычисления индекса для каждого div для подгрузки фото
    let IndexFirstDiv = indexVideo;
    let IndexTwoDiv = indexVideo+1;
    let IndexЕhreeDiv = indexVideo+2;
    if (IndexFirstDiv > masSlide.length - 1) {
        IndexFirstDiv = IndexFirstDiv - masSlide.length; 
    }
    if (IndexTwoDiv > masSlide.length - 1) {
        IndexTwoDiv = IndexTwoDiv - masSlide.length; 
    }
    if (IndexЕhreeDiv > masSlide.length - 1) {
        IndexЕhreeDiv = IndexЕhreeDiv - masSlide.length; 
    }
    if (i == 0) {
        return IndexFirstDiv;
    } else if(i == 1){
        return IndexTwoDiv;
    } else if(i == 2){
        return IndexЕhreeDiv;
    }
    
}

// function showItemsVideo(direction) { // ф-я для показа слайда
//     for(let i = 0;i < slideVideoImg.length; i++ ){
//         slideVideoImg[i].src =`${masSlide[indexDiv(indexVideo,i)]}`;

//     }
//     for(let i = 0;i < slideVideoImg.length; i++ ){
//         slideVideo[i].classList.add('next',direction);
//         slideVideo[i].addEventListener('animationend',function () {
//         this.classList.remove('next',direction);
//         this.classList.add('_active-slide-video');
//         });
//     }
// }
function showItemsVideo() { // ф-я для показа слайда
        for(let i = 0;i < slideVideoImg.length; i++ ){
            slideVideoImg[i].src =`${masSlide[indexDiv(indexVideo,i)]}`;
        }
       
    }

function nextSlideVideo() {
    if (indexVideo === masSlide.length - 1) {
        // hideItemsVideo('to-right');
        indexVideo = 0;
        // hideItemsVideo();
        // activeSlide(index);
        activeDotVideo(indexVideo);
        showItemsVideo();
        
    } else {
        // hideItemsVideo('to-right');
        indexVideo++;
        // activeSlide(index);
        // hideItemsVideo();
        activeDotVideo(indexVideo);
        showItemsVideo();
        
    }
}
function prevSlideVideo() {
    if (indexVideo === 0) {
        indexVideo = masSlide.length - 1;
        // activeSlide(index);
        activeDotVideo(indexVideo);
        showItemsVideo();
        
    } else {
        indexVideo--;
        // activeSlide(index);
        activeDotVideo(indexVideo);
        showItemsVideo();
        
    }
}

btnNextVideo.addEventListener('click',function () {
    console.log("нажал next");
   
    nextSlideVideo();
} );
btnPrevVideo.addEventListener('click',function () {
    console.log("нажал prev");
   
    prevSlideVideo();
} );