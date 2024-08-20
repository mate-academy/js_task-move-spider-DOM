'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target === wall) {
    const {
      top: wallTop,
      left: wallLeft,
      width: wallWidth,
      height: wallHeight,
    } = wall.getBoundingClientRect();
    const wallBorderWidth = parseInt(getComputedStyle(wall).borderWidth);

    const spiderHalfHeight = spider.offsetHeight / 2;
    const spiderHalfWidth = spider.offsetWidth / 2;

    let newSpiderTop = e.clientY - wallTop - wallBorderWidth - spiderHalfHeight;
    let newSpiderLeft =
      e.clientX - wallLeft - wallBorderWidth - spiderHalfWidth;

    const maxSpiderTop = wallHeight - spider.offsetHeight - wallBorderWidth * 2;
    const maxSpiderLeft = wallWidth - spider.offsetWidth - wallBorderWidth * 2;

    newSpiderTop = Math.max(0, Math.min(newSpiderTop, maxSpiderTop));
    newSpiderLeft = Math.max(0, Math.min(newSpiderLeft, maxSpiderLeft));

    spider.style.top = `${newSpiderTop}px`;
    spider.style.left = `${newSpiderLeft}px`;
  }
});
