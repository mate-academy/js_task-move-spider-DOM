'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Перевіряємо, чи клікнули саме по стіні
  if (!wall.contains(e.target)) {
    return;
  }

  // Отримуємо розміри стіни та павука
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderHalfWidth = spiderRect.width / 2;
  const spiderHalfHeight = spiderRect.height / 2;

  // Визначаємо бажані координати (центр павука під курсором)
  let newX = e.clientX - wallRect.left - spiderHalfWidth;
  let newY = e.clientY - wallRect.top - spiderHalfHeight;

  // Обмежуємо координати, щоб павук не виходив за межі стіни
  newX = Math.max(0, Math.min(newX, wallRect.width - spiderRect.width));
  newY = Math.max(0, Math.min(newY, wallRect.height - spiderRect.height));

  // Встановлюємо нові координати
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
