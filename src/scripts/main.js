'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  // Координати кліку відносно вікна
  const clickX = e.clientX;
  const clickY = e.clientY;

  // Розмір павука
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  // Розмір стіни
  const wallRect = wall.getBoundingClientRect();
  const wallLeft = wallRect.left;
  const wallTop = wallRect.top;
  const wallWidth = wallRect.width;
  const wallHeight = wallRect.height;

  // Розрахунок позиції павука з урахуванням обмежень
  let spiderX = clickX - wallLeft - spiderWidth / 2;
  let spiderY = clickY - wallTop - spiderHeight / 2;

  // Перевірка на вихід за межі стіни
  spiderX = Math.max(0, Math.min(spiderX, wallWidth - spiderWidth));
  spiderY = Math.max(0, Math.min(spiderY, wallHeight - spiderHeight));

  // Застосування нової позиції
  spider.style.position = 'absolute';
  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
