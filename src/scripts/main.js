'use strict';

const spider = document.body.querySelector('.spider');
const wall = document.body.querySelector('.wall');

const spiderSize = parseInt(getComputedStyle(spider).height, 10);
const halfSpider = spiderSize / 2;

document.addEventListener('click', (e) => {
  const coordX = e.clientX;
  const coordY = e.clientY;

  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);
  const wallRect = wall.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let centerX = coordX - wallRect.left - wallBorder;
    let centerY = coordY - wallRect.top - wallBorder;

    if (centerX < halfSpider) {
      centerX = halfSpider;
    }

    if (centerX > wall.clientWidth - halfSpider) {
      centerX = wall.clientWidth - halfSpider;
    }

    if (centerY < halfSpider) {
      centerY = halfSpider;
    }

    if (centerY > wall.clientHeight - halfSpider) {
      centerY = wall.clientHeight - halfSpider;
    }

    spider.style.left = `${centerX - halfSpider}px`;
    spider.style.top = `${centerY - halfSpider}px`;
  }
});
