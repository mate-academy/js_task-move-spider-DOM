'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.currentTarget;

  // Отримуємо координати стіни та розміри павука
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;


  const positionX = e.clientX - wallRect.left + window.pageXOffset;
  const positionY = e.clientY - wallRect.top + window.pageYOffset;

  // Обмежуємо координати, щоб павук не виходив за межі стіни
  const maxX = wallRect.width - spiderWidth;
  const maxY = wallRect.height - spiderHeight;

  // Встановлюємо позицію павука, обмежуючи його межі
  const finalX = Math.max(0, Math.min(positionX - spiderWidth / 2, maxX));
  const finalY = Math.max(0, Math.min(positionY - spiderHeight / 2, maxY));

  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
