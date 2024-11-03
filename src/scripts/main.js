'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Убедитесь, что ширина границы учитывается, если это необходимо
const borderSize = parseInt(getComputedStyle(wall).borderWidth) || 0;

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const offsetX = e.clientX - wallRect.left;
  const offsetY = e.clientY - wallRect.top;

  let newX = offsetX - spiderWidth / 2 - borderSize;
  let newY = offsetY - spiderHeight / 2 - borderSize;

  // Убедимся, что паук остается в границах стены
  newX = Math.min(
    Math.max(newX, 0),
    wallRect.width - spiderWidth - borderSize * 2,
  );

  newY = Math.min(
    Math.max(newY, 0),
    wallRect.height - spiderHeight - borderSize * 2,
  );

  // Перемещаем паука
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
