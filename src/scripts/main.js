'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallEdges = wall.getBoundingClientRect();

  const wallX = wallEdges.left;
  const wallY = wallEdges.top;
  const clientX = e.clientX;
  const clientY = e.clientY;

  let spiderX = clientX - wallX - spider.offsetWidth / 2;
  let spiderY = clientY - wallY - spider.offsetHeight / 2;

  spiderX = Math.max(
    0,
    Math.min(spiderX, wall.clientWidth - spider.offsetWidth),
  );

  spiderY = Math.max(
    0,
    Math.min(spiderY, wall.clientHeight - spider.offsetHeight),
  );

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
