'use strict';

const wall = document.getElementsByTagName('div')[0];
const spider = document.getElementsByTagName('img')[0];

wall.addEventListener('click', (e) => {
  const x = e.clientX - wall.offsetLeft;
  const y = e.clientY - wall.offsetTop;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const constrainedX = Math.max(0, Math.min(x, maxX));
  const constrainedY = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${constrainedX}px`;
  spider.style.top = `${constrainedY}px`;
});
