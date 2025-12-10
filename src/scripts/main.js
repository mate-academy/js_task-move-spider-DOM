'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
 
  const rect = wall.getBoundingClientRect();
  const wallWidth = rect.width;
  const wallHeight = rect.height;
  
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Обчислюємо позицію кліку ВІДНОСНО стінки (не сторінки!)
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  // Центруємо павука на позицію кліку
  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  // Обмежуємо в межах стінки
  newLeft = Math.max(0, Math.min(newLeft, wallWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});