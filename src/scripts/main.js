'use strict';

function initialization(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', e => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.x + wall.clientLeft;
    const wallY = wallPosition.y + wall.clientTop;

    let positionX = event.clientX - wallX - spider.offsetWidth / 2;
    let positionY = event.clientY - wallY - spider.offsetHeight / 2;

    const maxLeft = wall.clientWidth - spider.offsetWidth;
    const maxTop = wall.clientHeight - spider.offsetHeight;

    if (positionY < 0) {
      positionY = 0;
    }

    if (positionX < 0) {
      positionX = 0;
    }

    if (positionX > maxLeft) {
      positionX = maxLeft;
    }

    if (positionY > maxTop) {
      positionY = maxTop;
    }

    spider.style.top = `${positionY}px`;
    spider.style.left = `${positionX}px`;
  });
}

initialization(document.querySelector('.wall'));
