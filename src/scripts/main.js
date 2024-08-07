'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const wallBounding = wall.getBoundingClientRect();
  const spiderBounding = spider.getBoundingClientRect();
  const border = wall.clientTop;

  const spiderHeight = spiderBounding.height / 2;
  const spiderWidth = spiderBounding.width / 2;

  const spiderX = e.clientX - wallBounding.left - spiderWidth - border;
  const spiderY = e.clientY - wallBounding.top - spiderHeight - border;

  const clickX = Math.max(
    0,
    Math.min(spiderX, wall.clientWidth - spider.clientWidth),
  );
  const clickY = Math.max(
    0,
    Math.min(spiderY, wall.clientHeight - spider.clientHeight),
  );

  spider.style.left = `${clickX}px`;
  spider.style.top = `${clickY}px`;
});
