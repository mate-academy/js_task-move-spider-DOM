'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Координати кліку відносно сторінки
  const clickX = e.clientX;
  const clickY = e.clientY;

  // Розрахунок позиції павука відносно стіни
  let newLeft = clickX - wallRect.left - spiderRect.width / 2;
  let newTop = clickY - wallRect.top - spiderRect.height / 2;

  // Обмеження руху в межах стіни
  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderRect.width));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderRect.height));

  // Переміщення павука
  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
