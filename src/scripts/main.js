'use strict';

const moveSpider = (wall) => {
  const spider = wall.querySelector('.spider');
  let maxX = wall.clientWidth - spider.offsetWidth;
  let maxY = wall.clientHeight - spider.offsetHeight;

  spider.addEventListener('load', () => {
    maxX = wall.clientWidth - spider.offsetWidth;
    maxY = wall.clientHeight - spider.offsetHeight;
  });

  wall.addEventListener('click', (e) => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.left + wall.clientLeft;
    const wallY = wallPosition.top + wall.clientTop;

    let x = e.clientX - wallX - spider.offsetWidth / 2;
    let y = e.clientY - wallY - spider.offsetHeight / 2;

    if (x < 0) {
      x = 0;
    } else if (x > maxX) {
      x = maxX;
    }

    if (y < 0) {
      y = 0;
    } else if (y > maxY) {
      y = maxY;
    }

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  });
};

moveSpider(document.querySelector('.wall'));
