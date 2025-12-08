'use strict';
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
/*
offsetWidth offsetHeight 
Це властивості DOM-елемента, які повертають 
фактичні розміри елемента в пікселях, включаючи:
content (вміст)
padding
border
*/
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

wall.addEventListener('click', (e) => {
  /* 
  getBoundingClientRect() — 
  це метод (функція об’єкта), який належить будь-якому DOM-елементу.
  повертає об’єкт з точною інформацією 
  про положення та розміри елемента в браузері.
  {
  x: 100,
  y: 200,
  left: 100,
  top: 200,
  right: 500,
  bottom: 600,
  width: 400,
  height: 400
}
  */
  const rect = wall.getBoundingClientRect();
 
  /*
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  Віднімаємо rect.left і rect.top,
   щоб отримати позицію кліку не на всій сторінці, 
   а всередині .wall.
  */
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;


  /* 
  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  віднімаємо половину ширини та висоти павука,
   щоб його центр був на місці кліку, 
   а не лівий верхній кут.
  */

  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  // обмежуємо в межах стінки
  newLeft = Math.max(0, Math.min(wallWidth - spiderWidth, newLeft));
  newTop = Math.max(0, Math.min(wallHeight - spiderHeight, newTop));

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';

});


