'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (ev) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Spider half width/height
  const halfW = spiderRect.width / 2;
  const halfH = spiderRect.height / 2;

  // Coordinates relative to wall
  let x = ev.clientX - wallRect.left - halfW;
  let y = ev.clientY - wallRect.top - halfH;

  // Clamp inside wall
  const maxX = wallRect.width - spiderRect.width;
  const maxY = wallRect.height - spiderRect.height;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
