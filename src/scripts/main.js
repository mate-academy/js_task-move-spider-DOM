'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const item = e.target.closest('.wall');

  if (!item) {
    return;
  };

  const spiderSize = spider.clientWidth / 2;

  // for X, left

  if (e.offsetX < spiderSize) {
    spider.style.left = `0px`;
  } else if (e.offsetX > (wall.clientWidth - spiderSize)) {
    spider.style.left = `${wall.clientWidth - spiderSize * 2}px`;
  } else {
    spider.style.left = `${e.offsetX - spiderSize}px`;
  };

  // for Y, top

  if (e.offsetY < spiderSize) {
    spider.style.top = `0px`;
  } else if (e.offsetY > (wall.clientHeight - spiderSize)) {
    spider.style.top = `${wall.clientHeight - spiderSize * 2}px`;
  } else {
    spider.style.top = `${e.offsetY - spiderSize}px`;
  };
});
