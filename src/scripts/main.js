'use strict';

function init(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', event => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.x + wall.clientLeft;
    const wallY = wallPosition.y + wall.clientTop;

    let left = event.clientX - wallX - spider.offsetWidth / 2;
    let top = event.clientY - wallY - spider.offsetHeight / 2;

    const maxLeft = wall.clientWidth - spider.offsetWidth;
    const maxTop = wall.clientHeight - spider.offsetHeight;

    if (top < 0) {
      top = 0;
    }

    if (left < 0) {
      left = 0;
    }

    if (left > maxLeft) {
      left = maxLeft;
    }

    if (top > maxTop) {
      top = maxTop;
    }

    spider.style.top = `${top}px`;
    spider.style.left = `${left}px`;
  });
}

init(document.querySelector('.wall'));
