'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.getElementsByClassName('spider')[0];
  const wall = document.getElementsByClassName('wall')[0];
  const wallCoords = wall.getBoundingClientRect();

  const coords = {
    left:
      e.clientX - wallCoords.left - wall.clientLeft - spider.offsetWidth / 2,
    top: e.clientY - wallCoords.top - wall.clientTop - spider.offsetHeight / 2,
  };

  if (coords.left < 0) {
    coords.left = 0;
  }

  if (coords.top < 0) {
    coords.top = 0;
  }

  if (coords.top + spider.offsetHeight > wall.clientHeight) {
    coords.top = wall.clientHeight - spider.offsetHeight;
  }

  if (coords.left + spider.offsetWidth > wall.clientWidth) {
    coords.left = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.top = coords.top + 'px';
  spider.style.left = coords.left + 'px';
});
