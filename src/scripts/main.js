'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.closest('.wall')) {
    const rect = wall.getBoundingClientRect();

    let targetX = e.clientX - rect.left - wall.clientLeft;
    let targetY = e.clientY - rect.top - wall.clientTop;

    targetX -= spider.offsetWidth / 2;
    targetY -= spider.offsetHeight / 2;

    const minX = 0;
    const minY = 0;
    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

    if (targetX < minX) {
      targetX = minX;
    }

    if (targetY < minY) {
      targetY = minY;
    }

    if (targetX > maxX) {
      targetX = maxX;
    }

    if (targetY > maxY) {
      targetY = maxY;
    }

    spider.style.left = `${targetX}px`;
    spider.style.top = `${targetY}px`;
  }
});
