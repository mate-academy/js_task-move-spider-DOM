'use strict';
// Знайти елемент павука та контейнер стіни

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here
  const wallRect = wall.getBoundingClientRect();

  // Вирахувати нову позицію павука відносно стіни
  const spiderX = e.clientX - wallRect.left - spider.offsetWidth / 2;
  const spiderY = e.clientY - wallRect.top - spider.offsetHeight / 2;

  // Завіритися, що павук залишається в межах стіни

  const boundedX = Math.max(
    0,
    Math.min(spiderX, wallRect.width - spider.offsetWidth),
  );
  const boundedY = Math.max(
    0,
    Math.min(spiderY, wallRect.height - spider.offsetHeight),
  );

  // Оновити координати павука

  spider.style.left = `${boundedX}px`;
  spider.style.top = `${boundedY}px`;
});
