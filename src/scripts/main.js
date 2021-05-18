'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallBorder = Number.parseInt(getComputedStyle(wall).border);

  const wallX = wall.getBoundingClientRect().x;
  const wallY = wall.getBoundingClientRect().y;

  const targetX = e.clientX - wallX - (spider.offsetWidth / 2) - wallBorder;
  const targetY = e.clientY - wallY - (spider.offsetHeight / 2) - wallBorder;

  const maxX = wall.offsetWidth - (spider.offsetWidth) - wallBorder * 2;
  const maxY = wall.offsetHeight - (spider.offsetHeight) - wallBorder * 2;

  spider.style.left = validateBorders(targetX, maxX) + 'px';
  spider.style.top = validateBorders(targetY, maxY) + 'px';
});

function validateBorders(coord, maxValue) {
  return coord < 0 ? 0 : coord > maxValue ? maxValue : coord;
}
