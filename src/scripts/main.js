'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  // 1. Перевірка кліку в межах стіни
  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  // 2. Враховуємо товщину рамки (border), щоб уникнути зсуву в тестах
  const borderLeft = wall.clientLeft || 0;
  const borderTop = wall.clientTop || 0;

  // 3. Розміри павука
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // 4. Координати відносно внутрішнього краю стіни
  let newLeft = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;
  let newTop = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  // 5. Обмеження руху внутрішньою областю стіни
  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));

  // 6. Запис результату
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
