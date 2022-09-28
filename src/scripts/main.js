'use strict';

const wall = document.querySelector('.wall');
const coordsWall = wall.getBoundingClientRect();
const spider = document.querySelector('.spider');
const coordsSpider = {};

document.addEventListener('click', e => {
  const coordsMouse = {
    x: e.clientX,
    y: e.clientY,
  };

  if (coordsMouse.x > coordsWall.x + wall.offsetWidth
    || coordsMouse.x < coordsWall.x
    || coordsMouse.y > coordsWall.y + wall.offsetWidth
    || coordsMouse.y < coordsWall.y
  ) {
    return;
  }

  coordsSpider.x = coordsMouse.x - spider.clientWidth / 2
    - coordsWall.left - wall.clientLeft;

  coordsSpider.y = coordsMouse.y - spider.clientHeight / 2
    - coordsWall.top - wall.clientTop;

  switch (true) {
    case coordsSpider.x > wall.clientWidth - spider.clientWidth:
      spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
      break;

    case coordsSpider.x < wall.clientLeft:
      spider.style.left = 0;
      break;

    default:
      spider.style.left = coordsSpider.x + 'px';
      break;
  }

  switch (true) {
    case coordsSpider.y > wall.clientHeight - spider.clientHeight:
      spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
      break;

    case coordsSpider.y < wall.clientTop:
      spider.style.top = 0;
      break;

    default:
      spider.style.top = coordsSpider.y + 'px';
      break;
  }
});
