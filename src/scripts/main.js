'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const borderWidth = wall.clientLeft;

  const clickX = e.clientX - wallRect.x - borderWidth;
  const clickY = e.clientY - wallRect.y - borderWidth;

  const targetX = clickX - spider.offsetWidth / 2;
  const targetY = clickY - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  const resultX = Math.max(0, Math.min(targetX, maxX));
  const resultY = Math.max(0, Math.min(targetY, maxY));

  spider.style.transform = `translate(${resultX}px, ${resultY}px)`;
});
