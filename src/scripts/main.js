'use strict';

document.querySelector('.wall')?.addEventListener('click', function (e) {
  const wall = this;
  const spider = document.querySelector('.spider');

  if (!spider) {
    return;
  }

  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }
  spider.style.position = 'absolute';

  const rect = wall.getBoundingClientRect();

  const cs = getComputedStyle(wall);
  const borderL = parseFloat(cs.borderLeftWidth) || 0;
  const borderT = parseFloat(cs.borderTopWidth) || 0;

  const x = e.clientX - rect.left - borderL;
  const y = e.clientY - rect.top - borderT;

  const contentW = wall.clientWidth;
  const contentH = wall.clientHeight;

  const w = spider.offsetWidth;
  const h = spider.offsetHeight;

  let left = x - w / 2;
  let topPos = y - h / 2;

  const maxLeft = contentW - w;
  const maxTop = contentH - h;

  if (left < 0) {
    left = 0;
  }

  if (topPos < 0) {
    topPos = 0;
  }

  if (left > maxLeft) {
    left = maxLeft;
  }

  if (topPos > maxTop) {
    topPos = maxTop;
  }

  spider.style.left = left + 'px';
  spider.style.top = topPos + 'px';
});
