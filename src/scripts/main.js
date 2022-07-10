'use strict';

document.addEventListener('click', eventClick => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (eventClick.target !== wall) {
    return;
  };

  const spiderMin = spider.width / 2;
  let spiderCenterX = eventClick.offsetX - spiderMin;
  let spiderCenterY = eventClick.offsetY - spiderMin;

  if (eventClick.offsetX < spiderMin) {
    spiderCenterX = 0;
  };

  if (eventClick.offsetX > wall.clientWidth - spiderMin) {
    spiderCenterX = wall.clientWidth - spider.width;
  };

  if (eventClick.offsetY < spiderMin) {
    spiderCenterY = 0;
  };

  if (eventClick.offsetY > wall.clientHeight - spiderMin) {
    spiderCenterY = wall.clientHeight - spider.width;
  };

  spider.style = `left: ${spiderCenterX}px; top: ${spiderCenterY}px;`;
});
