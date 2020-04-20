'use strict';

const wall = document.querySelector('.wall');

function moveSpider() {
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', e => {
    const wallX = wall.getBoundingClientRect().left + wall.clientLeft;
    const wallY = wall.getBoundingClientRect().top + wall.clientTop;

    let x = event.clientX - wallX - (spider.offsetWidth / 2);
    let y = event.clientY - wallY - (spider.offsetHeight / 2);

    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

    if (x < 0) {
      x = 0;
    };

    if (y < 0) {
      y = 0;
    };

    if (x > maxX) {
      x = maxX;
    };

    if (y > maxY) {
      y = maxY;
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
};

moveSpider(wall);
