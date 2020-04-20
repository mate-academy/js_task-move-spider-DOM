'use strict';

function initSpider(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.x + wall.clientLeft;
    const wallY = wallPosition.y + wall.clientTop;

    let x = e.clientX - wallX - spider.offsetHeight / 2;
    let y = e.clientY - wallY - spider.offsetWidth / 2;
    const maxX = wall.clientHeight - spider.offsetHeight;
    const maxY = wall.clientWidth - spider.offsetWidth;

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
};

initSpider(
  document.querySelector('.wall')
);
