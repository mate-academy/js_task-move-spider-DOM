'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  spider.style.userSelect = 'none';
  const wall = document.querySelector('.wall');

  if (!wall.contains(e.target)) {
    return;
  }

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  let spiderX = e.clientX - wall.offsetLeft - spiderWidth / 2;
  let spiderY = e.clientY - wall.offsetTop - spiderHeight / 2;

  if (spiderX < 0) spiderX = 0;
  if (spiderY < 0) spiderY = 0;
  if (spiderX + spiderWidth > wallWidth) spiderX = wallWidth - spiderWidth;
  if (spiderY + spiderHeight > wallHeight) spiderY = wallHeight - spiderHeight;

  spider.style.left = `${parseFloat(spiderX)}px`;
  spider.style.top = `${parseFloat(spiderY)}px`;
});
