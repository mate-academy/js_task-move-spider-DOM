'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallCoords = wall.getBoundingClientRect();

const followClick = e => {
  if (e.target !== wall) {
    return;
  };

  const coordsY
    = e.clientY - wallCoords.y - wall.clientTop - (spider.clientHeight / 2);
  const coordsX
    = e.clientX - wallCoords.x - wall.clientLeft - (spider.clientWidth / 2);

  spider.style.top = coordsY + 'px';
  spider.style.left = coordsX + 'px';

  if (coordsX < 0) {
    spider.style.left = '0px';
  }

  if (coordsY < 0) {
    spider.style.top = '0px';
  }

  if (coordsX + spider.clientWidth > wall.clientWidth) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  }

  if (coordsY + spider.clientWidth > wall.clientWidth) {
    spider.style.top = wall.clientWidth - spider.clientWidth + 'px';
  }
};

document.addEventListener('click', followClick);
