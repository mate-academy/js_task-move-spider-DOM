'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (ev) => {
  if (ev.currentTarget !== wall) {
    return;
  }

  const maximalX = wall.clientWidth - spider.clientWidth;
  const maximalY = wall.clientHeight - spider.clientHeight;

  const centerX = ev.offsetX - spider.clientWidth / 2;
  const centerY = ev.offsetY - spider.clientHeight / 2;

  const spiderX = Math.max(0, Math.min(maximalX, centerX));
  const spiderY = Math.max(0, Math.min(maximalY, centerY));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
