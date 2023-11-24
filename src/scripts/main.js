'use strict';

// const body = document.body;
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const boundTop = wall.clientTop + wall.offsetTop;
  const boundLeft = wall.clientLeft + wall.offsetLeft;
  const spiderSize = spider.offsetWidth;
  const spiderPos = spiderSize / 2;
  const max = wall.clientWidth - spiderSize;

  let leftPos = (e.clientX - boundLeft - spiderPos) + window.scrollX;
  let topPos = (e.clientY - boundTop - spiderPos) + window.scrollY;

  if (leftPos > max) {
    leftPos = max;
  } else if (leftPos < 0) {
    leftPos = 0;
  }

  if (topPos > max) {
    topPos = max;
  } else if (topPos < 0) {
    topPos = 0;
  }

  spider.style.top = `${topPos}px`;
  spider.style.left = `${leftPos}px`;
});
