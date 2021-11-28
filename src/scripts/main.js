'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallCoord = wall.getBoundingClientRect();

  if (e.target.className !== 'wall') {
    return;
  }

  const spiderCoords = {
    left: e.clientX - wallCoord.left - wall.clientLeft - spider.offsetWidth / 2,
    top: e.clientY - wallCoord.top - wall.clientTop - spider.offsetHeight / 2,
  };

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
    spiderCoords.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
    spiderCoords.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderCoords.left}px`;
  spider.style.top = `${spiderCoords.top}px`;
});
