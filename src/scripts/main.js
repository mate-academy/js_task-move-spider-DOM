'use strict';

function init(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.left + wall.clientLeft;
    const wallY = wallPosition.top + wall.clientTop;
    let x = e.clientX - wallX - spider.offsetWidth / 2;
    let y = e.clientY - wallY - spider.offsetHeight / 2;
    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

    if (x < 0) {
      x = 0;
    };

    if (x > maxX) {
      x = maxX;
    };

    if (y < 0) {
      y = 0;
    };

    if (y > maxY) {
      y = maxY;
    };

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
}

init(
  document.querySelector('.wall')
);
