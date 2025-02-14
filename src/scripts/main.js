'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider'); // Отримання павука
  const wall = document.querySelector('.wall'); // Отримання стіни
  const clickX = e.clientX; // Отримання координат кліку
  const clickY = e.clientY;
  const wallRect = wall.getBoundingClientRect(); // Отримання розмірів стіни

  // Перевірка, чи клік в межах стіни
  if (
    clickX < wallRect.left ||
    clickX > wallRect.right ||
    clickY < wallRect.top ||
    clickY > wallRect.bottom
  ) {
    return;
  }

  // Отримуємо розміри павука
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Максимальні та мінімальні межі для павука
  const minCoordX = 0;
  const maxCoordX = wallRect.width - spiderWidth - 20;
  const minCoordY = 0;
  const maxCoordY = wallRect.height - spiderHeight - 20;

  // Обчислюємо нові координати, центруючи павука по кліку
  const newX = Math.min(
    Math.max(clickX - wallRect.left - spiderWidth / 2, minCoordX),
    maxCoordX,
  );
  const newY = Math.min(
    Math.max(clickY - wallRect.top - spiderHeight / 2, minCoordY),
    maxCoordY,
  );

  // Переміщуємо павука відносно стіни
  spider.style.position = 'absolute';
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
