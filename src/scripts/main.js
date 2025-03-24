'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');
  const styleWall = getComputedStyle(document.querySelector('.wall'));

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const styleSpider = getComputedStyle(spider);

  const MIN_X = wall.offsetLeft + parseInt(styleWall.borderLeftWidth);
  const MAX_X =
    wall.offsetLeft + wall.offsetWidth - parseInt(styleWall.borderRightWidth);
  const MIN_Y = wall.offsetTop + parseInt(styleWall.borderTopWidth);
  const MAX_Y =
    wall.offsetTop + wall.offsetHeight - parseInt(styleWall.borderBottomWidth);

  spider.style.left = `${e.clientX - MIN_X - parseInt(styleSpider.width) / 2}px`;
  spider.style.top = `${e.clientY - MIN_Y - parseInt(styleSpider.height) / 2}px`;

  if (e.clientX - MIN_X < 0) {
    spider.style.left = 0;
  }

  if (e.clientX > MAX_X - parseInt(styleSpider.width) / 2) {
    spider.style.left = `${
      parseInt(styleWall.width) - parseInt(styleSpider.width)
    }px`;
  }

  if (e.clientY - MIN_Y < 0) {
    spider.style.top = 0;
  }

  if (e.clientY > MAX_Y - parseInt(styleSpider.height) / 2) {
    spider.style.top = `${parseInt(styleWall.height) - parseInt(styleSpider.height)}px`;
  }
});
