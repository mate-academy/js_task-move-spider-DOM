'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Визначаємо координати кліку відносно стіни
  let x = e.clientX - wallRect.left - spiderWidth / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2;

  // Обмеження, щоб павук не виходив за межі стіни
  x = Math.max(0, Math.min(x, wall.clientWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderHeight));

  // Переміщення павука
  spider.style.position = 'absolute';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
