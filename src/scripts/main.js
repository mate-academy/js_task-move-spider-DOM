'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target === wall) {
    const coordinats = wall.getBoundingClientRect();

    const x = e.clientX - coordinats.left;
    const y = e.clientY - coordinats.top;

    const wallLeft = 0;
    const wallTop = 0;
    const wallRight = wall.clientWidth - spider.offsetWidth;
    const wallBottom = wall.clientHeight - spider.offsetHeight;

    const spiderX = Math.max(
      wallLeft,
      Math.min(wallRight, x - spider.offsetWidth / 2),
    );

    const spiderY = Math.max(
      wallTop,
      Math.min(wallBottom, y - spider.offsetHeight / 2),
    );

    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  }
});
