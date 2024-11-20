'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  const spiderH = spider.getBoundingClientRect().height;
  const spiderW = spider.getBoundingClientRect().width;

  const translateY =
    e.clientY - wall.getBoundingClientRect().y - 10 - spiderH / 2;
  const translateX =
    e.clientX - wall.getBoundingClientRect().x - 10 - spiderW / 2;

  if (e.target !== wall) {
    return;
  }

  spider.style.top = `${Math.min(Math.max(translateY, 0), wallHeight - spiderH)}px`;
  spider.style.left = `${Math.min(Math.max(translateX, 0), wallWidth - spiderH)}px`;
});
