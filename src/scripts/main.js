'use strict';

function moveSpider(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (clickEvent) => {
    let x = clickEvent.offsetX - spider.offsetWidth / 2;
    let y = clickEvent.offsetY - spider.offsetHeight / 2;

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

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
}

moveSpider(document.querySelector('.wall'));
