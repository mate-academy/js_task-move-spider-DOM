'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const sWidth = spider.offsetWidth;
  const sHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - sWidth / 2;
  let y = e.clientY - wallRect.top - sHeight / 2;

  const maxX = wallRect.width - sWidth;
  const maxY = wallRect.height - sHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.transform = `translate(${x}px, ${y}px)`;
});
