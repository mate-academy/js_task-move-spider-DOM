'use strict';

function init(wall) {
  const spider = wall.querySelector('.spider');
  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  wall.addEventListener('click', action => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.left + wall.clientLeft;
    const wallY = wallPosition.top + wall.clientTop;

    let x = action.clientX - wallX - spider.offsetWidth / 2;
    let y = action.clientY - wallY - spider.offsetHeight / 2;

    if (x < 0) {
      x = 0;
    }

    if (x > maxX) {
      x = maxX;
    }

    if (y > maxY) {
      y = maxY;
    }

    if (y < 0) {
      y = 0;
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
}

init(
  document.querySelector('.wall')
);
