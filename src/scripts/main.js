'use strict';

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wall')) {
    const spider = document.querySelector('.spider');
    const wall = e.target;

    // Отримуємо розміри павука та стіни
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    // Отримуємо розміри стіни (з врахуванням border)
    const wallRect = wall.getBoundingClientRect();
    const borderWidth = parseInt(window.getComputedStyle(wall).borderWidth);

    // Позиція павука відносно стіни + border
    let posX = e.clientX - wallRect.left - borderWidth - spiderWidth / 2;
    let posY = e.clientY - wallRect.top - borderWidth - spiderHeight / 2;

    // Отримуємо реальні розміри внутрішнього простору (без border)
    const wallWidth = wall.offsetWidth - 2 * borderWidth;
    const wallHeight = wall.offsetHeight - 2 * borderWidth;

    // Обмежуємо межами стіни
    posX = Math.max(0, Math.min(posX, wallWidth - spiderWidth));
    posY = Math.max(0, Math.min(posY, wallHeight - spiderHeight));

    spider.style.top = `${posY}px`;
    spider.style.left = `${posX}px`;
  }
});
