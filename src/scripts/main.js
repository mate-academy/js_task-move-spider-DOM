'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wall')) {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();
    const borderWidth = parseInt(window.getComputedStyle(wall).borderWidth);

    let spiderTop = e.clientY - wallRect.y - spiderRect.height / 2;
    let spiderLeft = e.clientX - wallRect.x - spiderRect.width / 2;

    if (spiderTop < 0) {
      spiderTop = 0;
    }

    if (spiderTop > wallRect.height - spiderRect.height) {
      spiderTop = wallRect.height - spiderRect.height - borderWidth * 2;
    }

    if (spiderLeft < 0) {
      spiderLeft = 0;
    }

    if (spiderLeft > wallRect.width - spiderRect.width) {
      spiderLeft = wallRect.width - spiderRect.width - borderWidth * 2;
    }

    spider.style.top = `${spiderTop}px`;
    spider.style.left = `${spiderLeft}px`;
  }
});
