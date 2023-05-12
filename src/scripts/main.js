'use strict';

document.addEventListener('click', e => {
  const wall = document.body.querySelector('.wall');
  const spider = document.body.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();
  let spiderCoordTop = e.clientY - wallCoords.top - wall.clientTop
    - (spider.clientHeight / 2);
  let spiderCoordLeft = e.clientX - wallCoords.left - wall.clientLeft
    - (spider.clientWidth / 2);

  if (spiderCoordTop < 0) {
    spiderCoordTop = 0;
  }

  if (spiderCoordLeft < 0) {
    spiderCoordLeft = 0;
  }

  if (spiderCoordLeft + spider.clientWidth > wall.clientWidth) {
    spiderCoordLeft = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoordTop + spider.clientHeight > wall.clientHeight) {
    spiderCoordTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderCoordLeft}px`;
  spider.style.top = `${spiderCoordTop}px`;
});
