'use strict';

function moveSpider(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (clickEvent) => {
    let coordinateX = clickEvent.offsetX - spider.offsetWidth / 2;
    let coordinateY = clickEvent.offsetY - spider.offsetHeight / 2;

    const borderX = wall.clientWidth - spider.offsetWidth;
    const borderY = wall.clientHeight - spider.offsetHeight;

    if (coordinateX < 0) {
      coordinateX = 0;
    }

    if (coordinateX > borderX) {
      coordinateX = borderX;
    }

    if (coordinateY < 0) {
      coordinateY = 0;
    }

    if (coordinateY > borderY) {
      coordinateY = borderY;
    }

    spider.style.top = `${coordinateY}px`;
    spider.style.left = `${coordinateX}px`;
  });
}

moveSpider(document.querySelector('.wall'));
