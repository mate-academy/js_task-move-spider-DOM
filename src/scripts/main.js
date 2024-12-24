'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  // Розмір павука
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  // Розмір стіни
  const wallRect = wall.getBoundingClientRect();

  // Координати кліку
  const clickX = e.clientX;
  const clickY = e.clientY;

  // Розрахунок нового положення
  let newLeft = clickX - wallRect.left - spiderWidth / 2;
  let newTop = clickY - wallRect.top - spiderHeight / 2;

  // Перевірка меж
  newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderHeight));

  // Застосування нового положення
  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
