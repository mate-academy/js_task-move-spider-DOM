'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const initTop = wall.clientTop + wall.offsetTop;
  const initLeft = wall.clientLeft + wall.offsetLeft;
  const spiderSize = spider.width;
  const spiderBody = spiderSize / 2;
  const maxPosition = wall.clientWidth - spiderSize;

  // eslint-disable-next-line no-shadow
  let top = (e.clientY - initTop - spiderBody) + window.scrollY;
  let left = (e.clientX - initLeft - spiderBody) + window.scrollX;

  if (top > maxPosition) {
    top = maxPosition;
  } else if (top < 0) {
    top = 0;
  }

  if (left > maxPosition) {
    left = maxPosition;
  } else if (left < 0) {
    left = 0;
  }

  spider.style.top = `${top}px`;
  spider.style.left = `${left}px`;
});
