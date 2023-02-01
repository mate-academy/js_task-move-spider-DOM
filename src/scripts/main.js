'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const coordsMouseClick = wall.getBoundingClientRect();

  const spiderCoords = {
    top: (e.clientY - coordsMouseClick.top
      - wall.clientTop - spider.clientHeight / 2),
    left: (e.clientX - coordsMouseClick.left
      - wall.clientLeft - spider.clientWidth / 2),
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
    spiderCoords.top = wall.clientHeight - spider.clientHeight;
  }

  if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
    spiderCoords.left = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = spiderCoords.top + 'px';
  spider.style.left = spiderCoords.left + 'px';
});
