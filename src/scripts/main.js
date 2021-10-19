'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallZone = e.target.closest('.wall');

  if (!wallZone) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();

  let spiderCoordsTop = e.clientY - wallCoords.top - wall.clientTop
  - spider.clientHeight / 2;
  let spiderCoordsLeft = e.clientX - wallCoords.left - wall.clientLeft
  - spider.clientWidth / 2;

  if (spiderCoordsTop < 0) {
    spiderCoordsTop = 0;
  }

  if (spiderCoordsLeft < 0) {
    spiderCoordsLeft = 0;
  }

  if (spiderCoordsTop + spider.clientHeight > wall.clientHeight) {
    spiderCoordsTop = wall.clientHeight - spider.clientHeight;
  }

  if (spiderCoordsLeft + spider.clientWidth > wall.clientWidth) {
    spiderCoordsLeft = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = spiderCoordsTop + 'px';
  spider.style.left = spiderCoordsLeft + 'px';
}
);
