'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const stylesBorder = getComputedStyle(wall).border;
  const borderWidth = 2 * parseInt(stylesBorder.split(' ')[0]);
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  let spiderX;
  let spiderY;

  switch (true) {
    case e.offsetX < spider.clientWidth:
      spiderX = 0;
      break;
    case e.offsetX > wall.clientWidth - borderWidth:
      spiderX = wall.clientWidth - spider.clientWidth;
      break;
    default:
      spiderX = e.offsetX - (spider.clientWidth / 2);
  }

  switch (true) {
    case e.offsetY < spider.clientHeight:
      spiderY = 0;
      break;
    case e.offsetY > wall.clientHeight - borderWidth:
      spiderY = wall.clientHeight - spider.clientHeight;
      break;
    default:
      spiderY = e.offsetY - (spider.clientHeight / 2);
  }

  spider.style.left = `${spiderX}px`;

  spider.style.top = `${spiderY}px`;
});
