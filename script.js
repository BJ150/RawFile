const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup= document.querySelector('.btnloginpop-up');
const iconClose= document.querySelector('.close');
const iconClose1= document.querySelector('.close1');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
iconClose1.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
