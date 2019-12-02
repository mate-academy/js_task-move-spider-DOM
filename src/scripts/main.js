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

  const gorSpiderMove = click.clientX - wallLeftPos - spiderSize / 2;
  const vertSpiderMove = click.clientY - wallTopPos - spiderSize / 2;

  spider.style.left = `${gorSpiderMove}px`;
  spider.style.top = `${vertSpiderMove}px`;

  if (click.clientX < wallLeftPos + spiderSize) {
    spider.style.left = `0`;
  }

  if (click.clientX > wallLeftPos + wall.clientWidth - spiderSize) {
    spider.style.left = `${wall.clientWidth - spiderSize}px`;
  }

  if (click.clientY < wallTopPos + spiderSize) {
    spider.style.top = `0`;
  }

  if (click.clientY > wallTopPos + wall.clientHeight - spiderSize) {
    spider.style.top = `${wall.clientHeight - spiderSize}px`;
  }
};

wall.addEventListener('click', moveSpider);
