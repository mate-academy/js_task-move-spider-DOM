'use strict';

document.addEventListener('click', e => {
  const item = e.target.closest('.wall');
  const spider = item.children[0];

  if (!item) {
    return;
  }

  const maxY = item.clientHeight - spider.clientHeight / 2;
  const minY = 0 + spider.clientHeight / 2;
  const maxX = item.clientWidth - spider.clientWidth / 2;
  const minX = 0 + spider.clientWidth / 2;
  const coordsY = Math.min(maxY, Math.max(minY, e.offsetY))
    - spider.clientHeight / 2;
  const coordsX = Math.min(maxX, Math.max(minX, e.offsetX))
    - spider.clientWidth / 2;

  spider.style.top = `${coordsY}px`;
  spider.style.left = `${coordsX}px`;
});
