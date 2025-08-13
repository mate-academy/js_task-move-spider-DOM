'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Толщина border
  const borderLeft = parseFloat(getComputedStyle(wall).borderLeftWidth);
  const borderTop = parseFloat(getComputedStyle(wall).borderTopWidth);

  // Координаты клика
  let coordX = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;
  let coordY = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  // Ограничиваем движение паука
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  coordX = Math.max(0, Math.min(coordX, maxX));
  coordY = Math.max(0, Math.min(coordY, maxY));

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
