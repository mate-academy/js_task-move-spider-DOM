'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  e.preventDefault();

  // Отримуємо координати відносно .wall
  const clickX = e.offsetX;
  const clickY = e.offsetY;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Центруємо павука навколо кліку
  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
