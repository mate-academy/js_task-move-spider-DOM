'use strict';

// 1. Шукаємо елементи
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// 2. Вішаємо клік САМЕ на wall, а не на document.

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // wall.clientLeft та wall.clientTop — це товщина рамок (border) стіни.

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  // Розраховуємо позицію центру
  let left = e.clientX - wallRect.left - borderLeft - spiderRect.width / 2;
  let targetTop = e.clientY - wallRect.top - borderTop - spiderRect.height / 2;

  // Обмеження, щоб не виходити за межі (враховуючи внутрішні розміри стіни)
  const maxLeft = wall.clientWidth - spiderRect.width;
  const maxTop = wall.clientHeight - spiderRect.height;

  // Обмеження зліва та зверху
  if (left < 0) {
    left = 0;
  }

  if (targetTop < 0) {
    targetTop = 0;
  }

  // Обмеження справа та знизу
  if (left > maxLeft) {
    left = maxLeft;
  }

  if (targetTop > maxTop) {
    targetTop = maxTop;
  }

  // Застосовуємо координати
  spider.style.left = `${left}px`;
  spider.style.top = `${targetTop}px`;
});
