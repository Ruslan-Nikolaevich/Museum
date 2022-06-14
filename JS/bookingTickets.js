const buttonBuyNow = document.querySelector('.button-buy-now');
const bookingTickets = document.querySelector('.booking-tickets');
const closeButton = document.querySelector('.close-button-booking-tickets');
const parallax = document.querySelector('.parallax');
const wrapperTicketsContent = document.querySelector('.wrapper-tickets-content');

const ticketsType = document.querySelector('.tickets-type');

const buttonBasicLeft = document.getElementById('button-basic-left');
const buttonBasicRight = document.getElementById('button-basic-right');
const basicInput = document.getElementById('basic-input');

const buttonSeniorLeft = document.getElementById('button-senior-left');
const buttonSeniorRight = document.getElementById('button-senior-right');
const seniorInput = document.getElementById('senior-input');

const checkPermanentRadiobutton = document.getElementById('check-permanent-radiobutton');
const checkTemporaryRadiobutton = document.getElementById('check-temporary-radiobutton');
const checkCombinedRadiobutton = document.getElementById('check-combined-radiobutton');

const totalCost = document.querySelector('.cost');

let permanent = 20; // 1 
let temporary = 25; // 2
let combined = 40; // 3
let valueBasicInput = 0;
let valueseniorInput = 0;
let cost = 0;

ticketsType.addEventListener('click',ticketsCost);

buttonBasicLeft.addEventListener('click', () =>{  // получаем данные из inpu в секции Basic левая кнопка
    valueBasicInput  = Number(basicInput.value) ;
    ticketsCost();
});
buttonBasicRight.addEventListener('click', () =>{ // получаем данные из inpu в секции Basic правая кнопка
    valueBasicInput = Number(basicInput.value);
    ticketsCost();

});

buttonSeniorLeft.addEventListener('click', () =>{  // получаем данные из inpu в секции Basic левая кнопка
    valueseniorInput = Number(seniorInput.value);
     ticketsCost();
});
buttonSeniorRight.addEventListener('click', () =>{ // получаем данные из inpu в секции Basic правая кнопка
    valueseniorInput = Number(seniorInput.value);
    ticketsCost();
});

function checkedRadioBtn() {  // проверяем что выбрано в чекбоксе
    if (checkPermanentRadiobutton.checked) {
        console.log(checkPermanentRadiobutton.value);
        return checkPermanentRadiobutton.value;
    }
    if (checkTemporaryRadiobutton.checked) {
        console.log(checkTemporaryRadiobutton.value);
        return checkTemporaryRadiobutton.value;
    }
    if (checkCombinedRadiobutton.checked) {
        console.log(checkCombinedRadiobutton.value);
        return checkCombinedRadiobutton.value;
    }
}
function ticketsCost() {
    let valueChecked = checkedRadioBtn();
    if (valueChecked == 1) {
        cost = valueBasicInput * permanent + valueseniorInput * (permanent / 2);
    }
    if (valueChecked == 2) {
        cost = valueBasicInput * temporary + valueseniorInput * (temporary / 2);
    }
    if (valueChecked == 3) {
        cost = valueBasicInput * combined + valueseniorInput * (combined / 2);
    }
    totalCost.innerHTML = `Total € ${cost.toFixed(1)}`;
}


buttonBuyNow.addEventListener('click', () =>{
    if (screenWindow <= 768) {
        wrapperTicketsContent.style.paddingBottom ='850px';
    }
    bookingTickets.style.left = '0%';
    // parallax.style.display = 'none';

    
});
closeButton.addEventListener('click',() =>{
    if (screenWindow <= 768) {
        wrapperTicketsContent.style.paddingBottom ='0px';
    }
    bookingTickets.style.left = '100%';
    // parallax.style.display = 'block';

});