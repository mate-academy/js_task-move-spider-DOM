'use strict';

document.addEventListener('click', e => {
  const target = e.target.closest('div');

  if (target) {
    const wall = document.querySelector('.wall');
    const wallGap = wall.clientTop + wall.clientLeft;

    const spider = document.querySelector('.spider');
    const wallPosition = wall.getBoundingClientRect();

    let spiderX = e.clientX - wallPosition.x
      - wall.clientLeft - spider.offsetWidth / 2;

    let spiderY = e.clientY - wallPosition.y
      - wall.clientTop - spider.offsetHeight / 2;

    const maxX = wall.offsetWidth - spider.offsetWidth - wallGap;
    const maxY = wall.offsetHeight - spider.offsetHeight - wallGap;

    if (spiderX > maxX) {
      spiderX = maxX;
    } else if (spiderX < 0) {
      spiderX = 0;
    }

    if (spiderY > maxY) {
      spiderY = maxY;
    } else if (spiderY < 0) {
      spiderY = 0;
    }

    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  }
});
