
let burger = document.getElementById('burger');
let nav = document.querySelector('.nav-list');



/*-------------burger-menu--------*/

burger.addEventListener('click', () => {
  if(nav.classList.contains("burger-menu")) {
    burger.style.transition = '1s';
    nav.classList.remove('burger-menu');
    nav.classList.add('nav-list');
   
  }else {
    nav.classList.remove('nav-list');
    nav.classList.add('burger-menu');

  }
  event.target.classList.remove('burger-menu');
});  
nav.addEventListener('click', () => {
 nav.classList.remove('burger-menu');
 nav.classList.add('nav-list');
}); 


let actionSetA = document.querySelector('.main-card-actionSetA');
let card = document.getElementsByClassName('main-card');
actionSetA.addEventListener('click', ()=>{
  debugger;
  for(let i = 1; i <= card.length; i++){
    card[--i].remove('main-card');
    //card[--i].add('test');
  }
})