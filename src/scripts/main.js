'use strict';

function init(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (evnt) => {
    let spiderY = evnt.offsetY - spider.clientWidth / 2;
    let spiderX = evnt.offsetX - spider.clientHeight / 2;
    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    if (spiderX < 0) {
      spiderX = 0;
    }

    if (spiderX > maxX) {
      spiderX = maxX;
    }

    if (spiderY < 0) {
      spiderY = 0;
    }

    if (spiderY > maxY) {
      spiderY = maxY;
    }

    spider.style.top = `${spiderY}px`;
    spider.style.left = `${spiderX}px`;
  });
};

init(document.querySelector('.wall'));
