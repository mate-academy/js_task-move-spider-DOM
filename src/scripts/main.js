'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallSize = wall.getBoundingClientRect();
  const borderSize = parseInt(getComputedStyle(wall).borderWidth);
  const spiderSize = spider.getBoundingClientRect();

  const targetCoords = {
    x: e.clientX - wallSize.left - spiderSize.width / 2 - borderSize,
    y: e.clientY - wallSize.top - spiderSize.height / 2 - borderSize,
  };

  targetCoords.x = Math.max(
    0,
    Math.min(targetCoords.x, wall.clientWidth - spiderSize.width),
  );

  targetCoords.y = Math.max(
    0,
    Math.min(targetCoords.y, wall.clientHeight - spiderSize.height),
  );

  spider.style.left = `${targetCoords.x}px`;
  spider.style.top = `${targetCoords.y}px`;
});
