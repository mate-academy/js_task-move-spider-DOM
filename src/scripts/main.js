'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderSize = spider.clientWidth;
  const wallSize = wall.clientWidth;

  if (e.target === wall) {
    let leftPos = e.offsetX - spiderSize / 2;
    let topPos = e.offsetY - spiderSize / 2;

    leftPos = leftPos < 0 ? 0 : leftPos;
    leftPos = leftPos > wallSize - spiderSize ? wallSize - spiderSize : leftPos;
    topPos = topPos < 0 ? 0 : topPos;
    topPos = topPos > wallSize - spiderSize ? wallSize - spiderSize : topPos;

    spider.style.left = `${leftPos}px`;
    spider.style.top = `${topPos}px`;
  }
});
