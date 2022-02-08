'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallCoords = wall.getBoundingClientRect();

  let topCoord = e.clientY - wallCoords.top
  - wall.clientTop - spider.clientHeight / 2;

  let leftCoord = e.clientX - wallCoords.left
  - wall.clientLeft - spider.clientWidth / 2;

  if (topCoord < 0) {
    topCoord = 0;
  };

  if (leftCoord < 0) {
    leftCoord = 0;
  };

  if (leftCoord + spider.clientWidth > wall.clientWidth) {
    leftCoord = wall.clientWidth - spider.clientWidth;
  };

  if (topCoord + spider.clientHeight > wall.clientHeight) {
    topCoord = wall.clientHeight - spider.clientHeight;
  };

  spider.style.top = topCoord + 'px';
  spider.style.left = leftCoord + 'px';
});
