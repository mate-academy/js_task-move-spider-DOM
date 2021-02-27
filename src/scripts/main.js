'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const wallCoords = wall.getBoundingClientRect();
  let wallCoordsLeft
    = e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / 2;
  let wallCoordsTop
    = e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2;

  if (wallCoordsLeft < 0) {
    wallCoordsLeft = 0;
  };

  if (wallCoordsTop < 0) {
    wallCoordsTop = 0;
  };

  if (wallCoordsLeft + spider.clientWidth > wall.clientWidth) {
    wallCoordsLeft = wall.clientWidth - spider.clientWidth;
  };

  if (wallCoordsTop + spider.clientHeight > wall.clientHeight) {
    wallCoordsTop = wall.clientHeight - spider.clientHeight;
  };

  spider.style.top = wallCoordsTop + 'px';
  spider.style.left = wallCoordsLeft + 'px';
});
