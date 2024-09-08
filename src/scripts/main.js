'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here
  const wallCoords = wall.getBoundingClientRect();

  const spiderCoords = {
    top: e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2,
    left:
      e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / 2,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (
    spiderCoords.left >
    wallCoords.width - spider.clientWidth - wall.clientLeft * 2
  ) {
    spiderCoords.left =
      wallCoords.width - spider.clientWidth - wall.clientLeft * 2;
  }

  if (
    spiderCoords.top >
    wallCoords.height - spider.clientHeight - wall.clientTop * 2
  ) {
    spiderCoords.top =
      wallCoords.height - spider.clientHeight - wall.clientTop * 2;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
});
