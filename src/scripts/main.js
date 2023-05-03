/* eslint-disable max-len */
'use strict';

document.addEventListener('click', e => {
  moveSpider(e.offsetX, e.offsetY);
});

function moveSpider(x, y) {
  const spider = document.querySelector('.spider');
  const spiderSize = spider.clientWidth;
  const wallSize = document.querySelector('.wall').clientWidth;

  spider.style.pointerEvents = 'none';

  const posX = Math.max(Math.min((x - spiderSize / 2), (wallSize - spiderSize)), 0) + 'px';
  const posY = Math.max(Math.min((y - spiderSize / 2), (wallSize - spiderSize)), 0) + 'px';

  spider.style.top = posY;
  spider.style.left = posX;
}
