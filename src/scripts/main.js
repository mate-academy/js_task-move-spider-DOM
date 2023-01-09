'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const border = wall.clientLeft;

document.addEventListener('click', e => {
  const coordsForSpider = spider.getBoundingClientRect();
  const coordsForWall = wall.getBoundingClientRect();

  const maxVertical
    = coordsForWall.height - border * 2 - coordsForSpider.height;
  const maxGorizont
    = coordsForWall.width - border * 2 - coordsForSpider.width;

  if (!e.target.closest('.wall')) {
    return;
  }

  let left = e.clientX - coordsForWall.left
    - wall.clientLeft - coordsForSpider.width / 2;

  let topO = e.clientY - coordsForWall.top
    - wall.clientTop - coordsForSpider.height / 2;

  if (left < 0) {
    left = 0;
  }

  if (left > maxGorizont) {
    left = maxGorizont;
  }

  if (topO < 0) {
    topO = 0;
  }

  if (topO > maxVertical) {
    topO = maxVertical;
  }

  spider.style.left = left + 'px';
  spider.style.top = topO + 'px';
});
