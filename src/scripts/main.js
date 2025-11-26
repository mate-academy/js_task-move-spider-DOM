'use strict';

const spider = document.body.querySelector('.spider');
const wall = document.body.querySelector('.wall');

const spiderSize = parseInt(getComputedStyle(spider).height, 10);

document.addEventListener('click', (e) => {
  const coordX = e.clientX;
  const coordY = e.clientY;

  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);

  const wallRect = wall.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let vertShift = coordY - wallRect.top - wallBorder - spiderSize / 2;
    let horizShift = coordX - wallRect.left - wallBorder - spiderSize / 2;

    if (vertShift < 0) {
      vertShift = 0;
    }

    if (wall.clientHeight - vertShift < spiderSize) {
      vertShift = wall.clientHeight - spiderSize;
    }

    if (horizShift < 0) {
      horizShift = 0;
    }

    if (wall.clientWidth - horizShift < spiderSize) {
      horizShift = wall.clientWidth - spiderSize;
    }

    spider.style.top = `${vertShift}px`;
    spider.style.left = `${horizShift}px`;
  }
});
