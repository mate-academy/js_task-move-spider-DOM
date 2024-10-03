'use strict';

const CLASS_WALL = 'wall';
const START_POSITION = 0;
const FILDS_SIZE = 400;

document.addEventListener('click', (e) => {
  if (e.target.className === CLASS_WALL) {
    const [spider] = e.target.children;
    const midlePointOfSpider = spider.offsetWidth / 2;

    spider.style.left = `${e.offsetX - midlePointOfSpider}px`;
    spider.style.top = `${e.offsetY - midlePointOfSpider}px`;

    if (e.offsetX < START_POSITION || e.offsetX <= midlePointOfSpider) {
      spider.style.left = `${START_POSITION}px`;
    }

    if (e.offsetY < START_POSITION || e.offsetY <= midlePointOfSpider) {
      spider.style.top = `${START_POSITION}px`;
    }

    if (
      e.offsetX > FILDS_SIZE ||
      e.offsetX >= FILDS_SIZE - midlePointOfSpider
    ) {
      spider.style.left = `${FILDS_SIZE - spider.offsetWidth}px`;
    }

    if (
      e.offsetY > FILDS_SIZE ||
      e.offsetY >= FILDS_SIZE - midlePointOfSpider
    ) {
      spider.style.top = `${FILDS_SIZE - spider.offsetWidth}px`;
    }
  }
});
