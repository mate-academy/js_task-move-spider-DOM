'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wall')) {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();
    const borderWidth = parseInt(window.getComputedStyle(wall).borderWidth);

    let spiderX = e.clientY - wallRect.y - spiderRect.height / 2 - borderWidth;
    let spiderY = e.clientX - wallRect.x - spiderRect.width / 2 - borderWidth;

    if (spiderX < 0) {
      spiderX = 0;
    }

    if (spiderX > wallRect.height - spiderRect.height - borderWidth * 2) {
      spiderX = wallRect.height - spiderRect.height - borderWidth * 2;
    }

    if (spiderY < 0) {
      spiderY = 0;
    }

    if (spiderY > wallRect.width - spiderRect.width - borderWidth * 2) {
      spiderY = wallRect.width - spiderRect.width - borderWidth * 2;
    }

    spider.style.top = `${spiderX}px`;
    spider.style.left = `${spiderY}px`;
  }
});
