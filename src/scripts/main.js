'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  // 1. Перевірка на клік поза межами стіни
  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  // 2. Враховуємо товщину рамки (border) стіни
  // clientLeft/clientTop — це товщина лівої та верхньої рамки
  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  // 3. Розрахунок координат
  // Віднімаємо wallRect.left (позиція на екрані) ТА borderLeft (товщина рамки)
  let x = e.clientX - wallRect.left - borderLeft - spider.offsetWidth / 2;
  let y = e.clientY - wallRect.top - borderTop - spider.offsetHeight / 2;

  // 4. Обмеження в межах clientWidth/Height (це внутрішня частина без рамок)
  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  // 5. Застосування стилів
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
