'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const clickX = e.clientX;
  const clickY = e.clientY;

  const leftBorder = wall.offsetLeft + wall.clientLeft;
  const topBorder = wall.offsetTop + wall.clientTop;

  const totalWidth = wall.clientWidth;
  const totalHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let newLeft = clickX - leftBorder - spiderWidth / 2;
  let newTop = clickY - topBorder - spiderHeight / 2;

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

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
