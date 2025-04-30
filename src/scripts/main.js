'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  // write code here
  if (!wall.contains(e.target)) {
    return;
  }

  const x = e.offsetX;
  const y = e.offsetY;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  let spiderX = x - spiderWidth / 2;
  let spiderY = y - spiderHeight / 2;

  spiderX = Math.max(0, Math.min(spiderX, maxX));
  spiderY = Math.max(0, Math.min(spiderY, maxY));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
