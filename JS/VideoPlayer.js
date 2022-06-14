const videoWrapper = document.querySelector('.wrapper-main-videoplayer');
const video = document.querySelector('.player__video');
const playButton = document.querySelector ('.video-button-play');
const stopButton = document.querySelector ('.video-button-play');
const progres = document.getElementById('paly1-id');
const soundBtnOnOf = document.querySelector('.video-button-volume');
const soundProgresBar = document.getElementById('volume');
const centrBtn = document.getElementById('videoButtonCenter');
const screen = document.getElementById('screen');
const videoButtonCenter = document.getElementById('videoButtonCenter');
const mainVideoPlayer = document.querySelector('.main-video-player');
const imgTicketsMain1024 = document.querySelector('.img-tickets-main1024');
const imgMaps1024 = document.querySelector('.img-maps1024');
const rewindSpeed = document.querySelector('.rewind-Speed');
let time,rate = 1;
if (scrWindow <= 768) { // scrWindow переменная определена в фале beforeAfter
    // mainVideoPlayer.style.background = 'none';
    mainVideoPlayer.style.background = "url('./assets/img/videoIMG768.jpg')";
    imgTicketsMain1024.src = './assets/img/Buytickets768.jpg';
    // imgMaps1024.src = './assets/img/card768.jpg';
   
}
// запуск видео
function playPause() {
    if (video.paused) {
        video.classList.add('player__video-active');
        videoButtonCenter.classList.add('video-button-center-disable');
        playButton.style.backgroundImage = "url('./assets/img/videoplayer/pauseVideo.svg')";
        video.play();
        
        // playButton.src = 'img/pause.png';
    } else {
        video.pause();
        video.classList.add('player__video-active');
        videoButtonCenter.classList.remove('video-button-center-disable');
        playButton.style.backgroundImage = "url('./assets/img/videoplayer/video-play.svg')";
        
    }
}

progres.style.setForeground = "red"; 
playButton.addEventListener('click',playPause);
video.addEventListener('click', playPause);
videoButtonCenter.addEventListener('click', playPause);

//progresbar video
function setProgres() {
    video.currentTime = (progres.value * video.duration)/100;
    
}
progres.addEventListener('change', setProgres);

video.ontimeupdate = progresUpdate;  // ontimeupdate обновление в режиме реального времени бара
function progresUpdate(){
    progres.value =(video.currentTime*100)/video.duration;
}
// звук
function soundOnOf() {
    if (video.volume === 1 ) {
        video.volume = 0;
        soundBtnOnOf.style.backgroundImage = "url('./assets/img/videoplayer/muteSound.svg')";
    } else {
        video.volume = 1;
        soundBtnOnOf.style.backgroundImage = "url('./assets/img/videoplayer/video-volume.svg')";
    }
}
soundBtnOnOf.addEventListener('click',soundOnOf);

function volumeData() {
    let v = this.value;
    
    console.log(v);
    video.volume = v/100;
if (v == 0) {
        console.log("откл звук");
        video.volume = 0;
        soundBtnOnOf.style.backgroundImage = "url('./assets/img/videoplayer/muteSound.svg')";   
    } else {
        video.volume = 1;
        soundBtnOnOf.style.backgroundImage = "url('./assets/img/videoplayer/video-volume.svg')";
    }
}
soundProgresBar.addEventListener('change', volumeData);
// видео полный экран
function fullScreenOnOff() {
    if (!document.fullscreenElement) { // document.fullscreenElement возвращает null
        videoWrapper.requestFullscreen();
    } else if (document.fullscreenEnabled) {
        document.exitFullscreen();
    }
    
    
}
screen.addEventListener('click',fullScreenOnOff);

function rewindSpd() { //замедление времени выполнения
    setTimeout(() => { rewindSpeed.style.display = 'none'; }, 2000); 
}

function forward() {
    rewindSpeed.style.display = 'block';
    video.play();
    video.playbackRate += 0.25;
    rewindSpeed.innerHTML =`${video.playbackRate}`;
    rewindSpd();

}
function back() {
    rewindSpeed.style.display = 'block';
    video.play();
    video.playbackRate -= 0.25;
    rewindSpeed.innerHTML =`${video.playbackRate}`;
    rewindSpd();
}

// горячие клавишы
document.onkeydown = function (params) {
    // console.log(params);
    if (params.code === 'KeyM') {
        console.log('нажата клавиша M');
        soundOnOf();
    }
    if (params.code === 'Space') {

        // console.log('нажата клавиша Space');
       playPause();
       params.preventDefault();

    }
    if (params.code === 'Period') {
        // console.log('нажата клавиша Space');
        forward();
    }

    if (params.code === 'Comma') {
        // console.log('нажата клавиша Space');
        back();
    }
    if (params.code === 'KeyF') {
        // console.log('нажата клавиша F');
        fullScreenOnOff();
    }
    
}