'use strict';

function init(wall) {
  const spider = wall.querySelector('.spider');
  let maxX;
  let maxY;

  spider.addEventListener('load', () => {
    maxX = wall.clientWidth - spider.offsetWidth;
    maxY = wall.clientHeight - spider.offsetHeight;
  });

  wall.addEventListener('click', (evt) => {
    const wallPosition = wall.getBoundingClientRect();

    const wallX = wallPosition.left + wall.clientLeft;
    const wallY = wallPosition.top + wall.clientTop;

    let x = evt.clientX - wallX - spider.offsetWidth / 2;
    let y = evt.clientY - wallY - spider.offsetHeight / 2;

    if (x < 0) {
      x = 0;
    }

    if (x > maxX) {
      x = maxX;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > maxY) {
      y = maxY;
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
}

init(document.querySelector('.wall'));
