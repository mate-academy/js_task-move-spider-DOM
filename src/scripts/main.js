'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (!wall.contains(e.target)) {
    return;
  }

  const spider = document.querySelector('.spider');
  const centerSpiderX = spider.clientWidth / 2;
  const centerSpiderY = spider.clientHeight / 2;

  const coordinates = {
    x: e.offsetX - centerSpiderX,
    y: e.offsetY - centerSpiderY,
  };

  coordinates.x = Math.max(
    0,
    Math.min(coordinates.x, wall.clientWidth - spider.clientWidth),
  );

  coordinates.y = Math.max(
    0,
    Math.min(coordinates.y, wall.clientHeight - spider.clientHeight),
  );

  spider.style.left = coordinates.x + 'px';
  spider.style.top = coordinates.y + 'px';
});
