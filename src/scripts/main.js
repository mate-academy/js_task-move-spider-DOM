'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallStyle = getComputedStyle(wall);
  const border = parseFloat(wallStyle.borderWidth);

  const position = wall.getBoundingClientRect();

  let spiderCenterX =
    e.clientX - position.left - border - spider.offsetWidth / 2;
  let spiderCenterY =
    e.clientY - position.top - border - spider.offsetWidth / 2;

  if (spiderCenterX < 0) {
    spiderCenterX = 0;
  }

  if (spiderCenterX > wall.clientWidth - spider.offsetWidth) {
    spiderCenterX = wall.clientWidth - spider.offsetWidth;
  }

  if (spiderCenterY < 0) {
    spiderCenterY = 0;
  }

  if (spiderCenterY > wall.clientWidth - spider.offsetWidth) {
    spiderCenterY = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.left = spiderCenterX + 'px';
  spider.style.top = spiderCenterY + 'px';
});
