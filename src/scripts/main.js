'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

wall.addEventListener('click', (clickEvent) => {
  const wallRect = wall.getBoundingClientRect();

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  const clickX = clickEvent.clientX - wallRect.left - wall.clientLeft;
  const clickY = clickEvent.clientY - wallRect.top - wall.clientTop;

  const x = Math.max(0, Math.min(clickX - spider.offsetWidth / 2, maxX));
  const y = Math.max(0, Math.min(clickY - spider.offsetHeight / 2, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
