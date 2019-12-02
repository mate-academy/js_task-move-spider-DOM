'use strict';

function moveSpider(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    const wallPosition = wall.getBoundingClientRect();
    const posX = wallPosition.x + wall.clientLeft;
    const posY = wallPosition.y + wall.clientTop;

    let x = e.clientX - posX - spider.offsetWidth / 2;
    let y = e.clientY - posY - spider.offsetHeight / 2;

    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

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

    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  });
}
moveSpider(document.querySelector('.wall'));
