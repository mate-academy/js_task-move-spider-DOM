'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const spiderW = spider.getBoundingClientRect().width;
  const spiderH = spider.getBoundingClientRect().height;
  const wallH = wall.clientHeight;
  const wallW = wall.clientWidth;
  const wallX = wall.getBoundingClientRect().x;
  const wallY = wall.getBoundingClientRect().y;

  const translateY = e.clientY - wallY - 10 - spiderH / 2;
  const translateX = e.clientX - wallX - 10 - spiderW / 2;

  spider.style.top = `${Math.min(Math.max(translateY, 0), wallH - spiderH)}px`;
  spider.style.left = `${Math.min(Math.max(translateX, 0), wallW - spiderW)}px`;
});
