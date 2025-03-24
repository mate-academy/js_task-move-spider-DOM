'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');
  const styleWall = getComputedStyle(document.querySelector('.wall'));

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const styleSpider = getComputedStyle(spider);

  const MIN_X =
    wall.offsetLeft +
    parseInt(styleWall.borderLeftWidth) +
    parseInt(styleSpider.width) / 2;
  const MAX_X =
    wall.offsetLeft +
    wall.offsetWidth -
    parseInt(styleWall.borderRightWidth) -
    parseInt(styleSpider.width) / 2;
  const MIN_Y =
    wall.offsetTop +
    parseInt(styleWall.borderTopWidth) +
    parseInt(styleSpider.height) / 2;
  const MAX_Y =
    wall.offsetTop +
    wall.offsetHeight -
    parseInt(styleWall.borderBottomWidth) -
    parseInt(styleSpider.height) / 2;

  spider.style.left = `${e.x - MIN_X}px`;
  spider.style.top = `${e.y - MIN_Y}px`;

  if (e.x - MIN_X < 0) {
    spider.style.left = 0;
  }

  if (e.x > MAX_X) {
    spider.style.left = `${
      parseInt(styleWall.width) - parseInt(styleSpider.width)
    }px`;
  }

  if (e.y - MIN_Y < 0) {
    spider.style.top = 0;
  }

  if (e.y > MAX_Y) {
    spider.style.top = `${parseInt(styleWall.height) - parseInt(styleSpider.height)}px`;
  }
});
