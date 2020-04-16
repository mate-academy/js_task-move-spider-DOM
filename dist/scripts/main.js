'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', moveSpider);

function moveSpider() {
  const wallCoords = event.target.getBoundingClientRect();
  const spiderCoords = {
    top: event.clientY - wallCoords.top
      - wall.clientTop - spider.clientHeight / 2,
    left: event.clientX - wallCoords.left
      - wall.clientLeft - spider.clientWidth / 2,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
    spiderCoords.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
    spiderCoords.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
};
