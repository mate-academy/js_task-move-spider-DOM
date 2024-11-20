'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const x = e.x;
  const y = e.y;

  const leftBorder = wall.offsetLeft + wall.clientLeft;
  const topBorder = wall.offsetTop + wall.clientTop;
  const totalWidth = wall.clientWidth;
  const totalHeight = wall.clientHeight;

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let newLeft = x - leftBorder - spiderWidth / 2;
  let newTop = y - topBorder - spiderHeight / 2;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > totalWidth - spiderWidth) {
    newLeft = totalWidth - spiderWidth;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > totalHeight - spiderHeight) {
    newTop = totalHeight - spiderHeight;
  }

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
