'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const rect = wall.getBoundingClientRect();

  const x = e.clientX - rect.left - wall.clientLeft;
  const y = e.clientY - rect.top - wall.clientTop;

  let targetX = x - spider.clientWidth / 2;
  let targetY = y - spider.clientHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  if (targetX < 0) {
    targetX = 0;
  }

  if (targetY < 0) {
    targetY = 0;
  }

  if (targetX > maxX) {
    targetX = maxX;
  }

  if (targetY > maxY) {
    targetY = maxY;
  }

  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
