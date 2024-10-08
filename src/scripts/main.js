'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  /* wall.onclick = function () { */

  const wallCoords = wall.getBoundingClientRect();

  const spiderCoords = {
    top:
      event.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2,
    left:
      event.clientX -
      wallCoords.left -
      wall.clientLeft -
      spider.clientWidth / 2,
  };

  // prevent crossing the top field boundary
  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  // prevent crossing the left field boundary
  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  // prevent crossing the right field boundary
  if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
    spiderCoords.left = wall.clientWidth - spider.clientWidth;
  }

  // prevent crossing the bottom field boundary
  if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
    spiderCoords.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
});
