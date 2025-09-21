'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className === 'wall') {
    const spider = document.querySelector('.spider');
    const wall = document.querySelector('.wall');

    const coordsClick = {
      x: e.clientX,
      y: e.clientY,
    };

    const wallPosition = wall.getBoundingClientRect();

    const wallBorders = {
      x: wall.clientLeft,
      y: wall.clientTop,
    };

    const spiderSize = {
      width: spider.offsetWidth,
      heigth: spider.offsetHeight,
    };

    const calcedCoords = {
      x: coordsClick.x - wallPosition.x - wallBorders.x - spiderSize.width / 2,
      y: coordsClick.y - wallPosition.y - wallBorders.y - spiderSize.heigth / 2,
    };

    if (calcedCoords.x < 0) {
      calcedCoords.x = 0;
    }

    if (calcedCoords.x > wall.clientWidth - spider.width) {
      calcedCoords.x = wall.clientWidth - spider.width;
    }

    if (calcedCoords.y < 0) {
      calcedCoords.y = 0;
    }

    if (calcedCoords.y > wall.clientHeight - spider.width) {
      calcedCoords.y = wall.clientHeight - spider.width;
    }

    spider.style.top = `${calcedCoords.y}px`;
    spider.style.left = `${calcedCoords.x}px`;
  }
});
