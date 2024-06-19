'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function moveSpider({ target, offsetX, offsetY }) {
  if (target.classList.contains('wall')) {
    const { width: spiderWidth, height: spiderHeight } =
      spider.getBoundingClientRect();

    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;

    const minPosX = 0;
    const maxPosX = wallWidth - spiderWidth;

    const minPosY = 0;
    const maxPosY = wallHeight - spiderHeight;

    const currentPosX = offsetX - spiderWidth / 2;
    const currentPosY = offsetY - spiderHeight / 2;

    const posX =
      currentPosX <= wallWidth / 2
        ? Math.max(minPosX, currentPosX)
        : Math.min(maxPosX, currentPosX);

    const posY =
      currentPosY <= wallHeight / 2
        ? Math.max(minPosY, currentPosY)
        : Math.min(maxPosY, currentPosY);

    spider.style.cssText = `left: ${posX}px; top: ${posY}px`;
  }
}

document.addEventListener('click', moveSpider);
