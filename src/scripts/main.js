'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let leftCoord = e.clientX - wallRect.left - spider.offsetWidth / 2;
  let topCoord = e.clientY - wallRect.top - spider.offsetHeight / 2;

  leftCoord = Math.min(
    Math.max(leftCoord, 0),
    wall.offsetWidth - spider.offsetWidth,
  );

  topCoord = Math.min(
    Math.max(topCoord, 0),
    wall.offsetHeight - spider.offsetHeight,
  );

  spider.style.left = `${leftCoord}px`;
  spider.style.top = `${topCoord}px`;
});
