'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Захист від помилок
  if (!wall || !spider) {
    return;
  }

  // Якщо .wall не має позиційного контексту — зробимо його таким
  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  // Встановлюємо position один раз
  spider.style.position = 'absolute';

  // Ігноруємо кліки поза .wall
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();

  // Координати кліку усередині стіни з урахуванням рамок
  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  // Центруємо павука
  let targetX = clickX - spiderRect.width / 2;
  let targetY = clickY - spiderRect.height / 2;

  // Межі руху (без виходу за внутрішню область стіни)
  const maxX = wall.clientWidth - spiderRect.width;
  const maxY = wall.clientHeight - spiderRect.height;

  targetX = Math.max(0, Math.min(targetX, maxX));
  targetY = Math.max(0, Math.min(targetY, maxY));

  // Застосовуємо нову позицію
  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
