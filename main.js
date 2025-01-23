'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Отримуємо розміри та позицію стіни
  const wallRect = wall.getBoundingClientRect();

  // Перевіряємо, чи клацання було всередині стіни
  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    // Якщо клацання поза стіною, нічого не робимо
    return;
  }

  // Розраховуємо координати для центру павука
  const borderWidth = parseInt(getComputedStyle(wall).borderWidth) || 0;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - borderWidth - spiderWidth / 2;
  let y = e.clientY - wallRect.top - borderWidth - spiderHeight / 2;

  // Обмежуємо координати, щоб павук залишався всередині стіни
  x = Math.max(0, Math.min(x, wallRect.width - 2 * borderWidth - spiderWidth));

  y = Math.max(
    0,
    Math.min(y, wallRect.height - 2 * borderWidth - spiderHeight),
  );

  // Переміщуємо павука
  spider.style.transform = `translate(${x}px, ${y}px)`;
});
