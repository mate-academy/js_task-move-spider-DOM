'use strict';

const spider = document.querySelector('.spider');
const spiderSize = parseFloat(getComputedStyle(spider).height);
const wall = document.querySelector('.wall');
const wallSize = parseFloat(getComputedStyle(wall).height);

document.addEventListener('click', e => {
  const x = e.offsetX;
  const y = e.offsetY;

  if (e.target === wall) {
    let topAdder = 0;
    let leftAdder = 0;
    let rightSubtracter = 0;
    let bottomSubtracter = 0;

    if (x < spiderSize / 2) {
      leftAdder = spiderSize / 2 - x;
    }

    if ((x - wallSize + spiderSize / 2) > 0) {
      rightSubtracter = x - wallSize + spiderSize / 2;
    }

    if (y < spiderSize / 2) {
      topAdder = spiderSize / 2 - y;
    }

    if ((y - wallSize + spiderSize / 2) > 0) {
      bottomSubtracter = y - wallSize + spiderSize / 2;
    }
    spider.style.left = `${x - spiderSize / 2 + leftAdder - rightSubtracter}px`;
    spider.style.top = `${y - spiderSize / 2 + topAdder - bottomSubtracter}px`;
  }

  if (e.target === spider) {
    spider.style.top = 0;
    spider.style.left = 0;
  }
});
