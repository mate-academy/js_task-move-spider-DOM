'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const [y, x] = [e.offsetY, e.offsetX];

  const { clientHeight: spiderHeight, clientWidth: spiderWidth } = spider;
  const { clientHeight: wallHeight, clientWidth: wallWidth } = wall;

  let topPos = y - spiderHeight / 2;
  let leftPos = x - spiderWidth / 2;

  topPos = Math.min(topPos, wallHeight - spiderHeight);
  topPos = Math.max(topPos, 0);

  leftPos = Math.min(leftPos, wallWidth - spiderWidth);
  leftPos = Math.max(leftPos, 0);

  spider.style.top = `${topPos}px`;
  spider.style.left = `${leftPos}px`;
});
