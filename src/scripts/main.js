'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  const wallPos = wall.getBoundingClientRect();
  const spiderPos = spider.getBoundingClientRect();

  const borderWidth = parseFloat(window.getComputedStyle(wall).borderWidth);

  if (
    posX >= wallPos.left &&
    posX <= wallPos.right &&
    posY >= wallPos.top &&
    posY <= wallPos.bottom
  ) {
    let spiderTop = posY - wallPos.top - borderWidth - spiderPos.height / 2;
    let spiderLeft = posX - wallPos.left - borderWidth - spiderPos.width / 2;

    if (spiderTop < 0) {
      spiderTop = 0;
    }

    if (spiderLeft < 0) {
      spiderLeft = 0;
    }

    if (spiderTop >= wallPos.height - spiderPos.height) {
      spiderTop = wallPos.height - borderWidth * 2 - spiderPos.height;
    }

    if (spiderLeft >= wallPos.width - spiderPos.width) {
      spiderLeft = wallPos.width - borderWidth * 2 - spiderPos.width;
    }

    spider.style.top = spiderTop + 'px';
    spider.style.left = spiderLeft + 'px';
  }
});
