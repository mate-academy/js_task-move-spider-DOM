'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  };

  const halfSpider = spider.width / 2;
  let spiderCenterX = e.offsetX - halfSpider;
  let spiderCenterY = e.offsetY - halfSpider;

  if (e.offsetX < halfSpider) {
    spiderCenterX = 0;
  };

  if (e.offsetX > wall.clientWidth - halfSpider) {
    spiderCenterX = wall.clientWidth - spider.width;
  };

  if (e.offsetY < halfSpider) {
    spiderCenterY = 0;
  };

  if (e.offsetY > wall.clientHeight - halfSpider) {
    spiderCenterY = wall.clientHeight - spider.width;
  };

  spider.style = `left: ${spiderCenterX}px; top: ${spiderCenterY}px;`;
});
