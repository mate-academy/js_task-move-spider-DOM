'use strict';

function initialization(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', e => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.x + wall.clientLeft;
    const wallY = wallPosition.y + wall.clientTop;

    let fieldX = event.clientX - wallX - spider.offsetWidth / 2;
    let fieldY = event.clientY - wallY - spider.offsetHeight / 2;

    const maxLeft = wall.clientWidth - spider.offsetWidth;
    const maxTop = wall.clientHeight - spider.offsetHeight;

    if (fieldY < 0) {
      fieldY = 0;
    }

    if (fieldX < 0) {
      fieldX = 0;
    }

    if (fieldX > maxLeft) {
      fieldX = maxLeft;
    }

    if (fieldY > maxTop) {
      fieldY = maxTop;
    }

    spider.style.top = `${fieldY}px`;
    spider.style.left = `${fieldX}px`;
  });
}

initialization(document.querySelector('.wall'));
