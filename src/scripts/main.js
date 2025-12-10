'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // Отримуємо актуальні розміри на кожен клік
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Обчислюємо позицію кліку ВІДНОСНО стінки (враховуючи border)
  const rect = wall.getBoundingClientRect();
  const clickX = e.clientX - rect.left - wall.clientLeft;
  const clickY = e.clientY - rect.top - wall.clientTop;

  // Центруємо павука на позицію кліку
  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  // Обмежуємо в межах стінки
  newLeft = Math.max(0, Math.min(newLeft, wallWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});