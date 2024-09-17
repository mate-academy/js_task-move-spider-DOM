'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const spiderCoords = {
    x: e.clientX - wall.offsetLeft - wall.clientLeft - spiderWidth / 2,
    y: e.clientY - wall.offsetTop - wall.clientTop - spiderHeight / 2,
  };

  if (spiderCoords.x < 0) {
    spiderCoords.x = 0;
  }

  if (spiderCoords.y < 0) {
    spiderCoords.y = 0;
  }

  if (spiderCoords.x + spiderWidth > wallWidth) {
    spiderCoords.x = wallWidth - spiderWidth;
  }

  if (spiderCoords.y + spiderHeight > wallHeight) {
    spiderCoords.y = wallHeight - spiderHeight;
  }

  if (e.target.closest('.wall')) {
    spider.style.left = `${spiderCoords.x}px`;
    spider.style.top = `${spiderCoords.y}px`;
  }
});
