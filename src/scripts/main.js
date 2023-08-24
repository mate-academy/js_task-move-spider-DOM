'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const topBorder = wall.clientHeight - spider.clientHeight;
  const leftBorder = wall.clientWidth - spider.clientWidth;

  let spiderX
    = e.clientX - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2;

  let spiderY
    = e.clientY - wall.offsetTop - wall.clientTop - spider.clientHeight / 2;

  spiderX = Math.max(0, Math.min(leftBorder, spiderX));
  spiderY = Math.max(0, Math.min(topBorder, spiderY));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
