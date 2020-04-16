'use strict';

const wall = document.body.querySelector('.wall');
const wallLeftPos = wall.clientLeft + wall.offsetLeft;
const wallTopPos = wall.clientTop + wall.offsetTop;
const spider = document.body.querySelector('.spider');
const spiderStyles = getComputedStyle(spider);
const spiderSize = parseFloat(spiderStyles.width);

const moveSpider = (click) => {
  const coordinates = click.target;

  if (!coordinates) {
    return;
  }

  const horSpiderMove = click.clientX - wallLeftPos - spiderSize / 2;
  const vertSpiderMove = click.clientY - wallTopPos - spiderSize / 2;
  const leftBorder = wallLeftPos + spiderSize;
  const rightBorder = wallLeftPos + wall.clientWidth - spiderSize;
  const topBorder = wallTopPos + spiderSize;
  const bottomBorder = wallTopPos + wall.clientHeight - spiderSize;

  spider.style.left = `${horSpiderMove}px`;
  spider.style.top = `${vertSpiderMove}px`;

  if (click.clientX < leftBorder) {
    spider.style.left = `0`;
  }

  if (click.clientX > rightBorder) {
    spider.style.left = `${wall.clientWidth - spiderSize}px`;
  }

  if (click.clientY < topBorder) {
    spider.style.top = `0`;
  }

  if (click.clientY > bottomBorder) {
    spider.style.top = `${wall.clientHeight - spiderSize}px`;
  }
};

wall.addEventListener('click', moveSpider);
