const burgerMenu = document.getElementById('burgerMenu');
const welcomSection = document.querySelector('.welcom-section');
const sectionTitle = document.querySelector('.section-title');
const welcomParagraph = document.querySelector('.welcom-paragraph');
const welcomButton = document.querySelector('.welcom-button');
const wrapperHeaderMenu1024 = document.querySelector('.wrapper-header-menu1024');
const welcome = document.querySelector('.welcome');
const containerHeader = document.querySelector('.container-header');
const wrapperWelcomSection = document.querySelector('.wrapper__welcom-section');
const welcomH2 = document.getElementById('welcomH2');



let markOpen = 0;
let screenWindow = window.screen.width;
console.log(screenWindow);
if (screenWindow <= 768) {
    welcomH2.style.display = 'none';
}
function styleOpenBurger() {
        burgerMenu.style.width = '25px';
        burgerMenu.style.height = '25px';
        burgerMenu.style.background = "url('./assets/img/closeBurgerMenu1024.png')";
        burgerMenu.style.backgroundSize = "cover";
        burgerMenu.style.backgroundRepeat = "no-repeat";
        burgerMenu.style.backgroundPosition = "center";
        burgerMenu.style.marginLeft = '8px';
        // welcomSection.style.display = 'none';
       
        if (screenWindow > 768) {
            sectionTitle.style.display = 'none';
            welcomParagraph.style.display = 'none';
            welcomButton.style.display = 'none';
        } else if(screenWindow <= 768){
            welcomH2.style.display = 'none';

            sectionTitle.style.display = 'none';
            welcomParagraph.style.display = 'none';
            welcomButton.style.display = 'none';
        }
        wrapperHeaderMenu1024.style.left = '0%';

}
function styleCloseBurger() {
        burgerMenu.style.width = '32px';
        burgerMenu.style.height = '18px';
        burgerMenu.style.background = "url('./assets/img/burgerMenu1024.png')";
        burgerMenu.style.backgroundSize = "cover";
        burgerMenu.style.backgroundRepeat = "no-repeat";
        burgerMenu.style.backgroundPosition = "center";
        burgerMenu.style.marginLeft = '0px';
       
        if (screenWindow > 768) {
            welcomParagraph.style.display = 'block';
            // sectionTitle.style.display = 'block';
            welcomH2.style.display = 'block';
            welcomButton.style.display = 'block';
            welcomButton.style.display = 'flex';
            welcomButton.style.justifyContent = 'center';
            welcomButton.style.alignItems = 'center';
            console.log ('screenWindow > 768');
           
        } else if (screenWindow <= 768){
            welcomButton.style.display = 'none';
            welcomH2.style.display = 'none';
            console.log ('screenWindow < 768');
        }
        wrapperHeaderMenu1024.style.left = '-110%';
        
}


burgerMenu.addEventListener('click', () => {
    if (markOpen === 0) {
        styleOpenBurger()
        markOpen = 1;
        // console.log(markOpen);
    } else {
            styleCloseBurger();
            markOpen = 0;
            // console.log(markOpen);
        
     }
});

welcome.addEventListener('click', () => {
    if (markOpen === 1) {
        styleCloseBurger();
            markOpen = 0;
            // console.log(markOpen);
    }
});
// containerHeader.addEventListener('click', () => {
//     if (markOpen === 1) {
//         styleCloseBurger();
//             markOpen = 0;
//             console.log(markOpen);
//     }
// });
