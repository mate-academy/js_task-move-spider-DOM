'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    // Отримуємо розміри контейнера (стіни) і павука
    const wallRect = wall.getBoundingClientRect();
    const spiderSize = spider.offsetWidth / 2;

    // Отримуємо позицію курсора відносно стіни
    const x = e.clientX - wallRect.left;
    const y = e.clientY - wallRect.top;

    // Обчислюємо максимальні позиції, щоб павук не виходив за межі
    const maxX = wallRect.width - spiderSize * 2;
    const maxY = wallRect.height - spiderSize * 2;

    // Обмежуємо координати в межах стіни
    const finalX = Math.max(spiderSize, Math.min(x, maxX + spiderSize));
    const finalY = Math.max(spiderSize, Math.min(y, maxY + spiderSize));

    // Задаємо нову позицію павуку
    spider.style.transform = `translate(${finalX - spiderSize}px, ${finalY - spiderSize}px)`;
  });
});
