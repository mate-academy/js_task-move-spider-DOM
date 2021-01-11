'use strict';

document.addEventListener('click', el => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const borderWidth = getComputedStyle(wall).borderLeftWidth;
  const leftSide = wall.getBoundingClientRect().left;
  const rightSide = wall.getBoundingClientRect().right;
  const topSide = wall.getBoundingClientRect().top;
  const bottomSide = wall.getBoundingClientRect().bottom;

  if (el.target !== wall) {
    return
  }

  if (event.clientX < leftSide + spider.width) {
    spider.style.left = 0;
  } else if (event.clientX > rightSide - spider.width) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  } else {
    spider.style.left = (event.clientX - leftSide
      - Number.parseFloat(borderWidth) - spider.width / 2) + 'px';
  }

  if (event.clientY < topSide + spider.width) {
    spider.style.top = 0;
  } else if (event.clientY > bottomSide - spider.width) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  } else {
    spider.style.top = (event.clientY - topSide
      - Number.parseFloat(borderWidth) - spider.width / 2) + 'px';
  }
});
