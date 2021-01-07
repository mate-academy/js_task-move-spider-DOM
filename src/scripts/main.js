'use strict';

const spider = document.querySelector('.spider');
const area = document.querySelector('.wall');

area.addEventListener('click', e => {
  const areaCoords = area.getBoundingClientRect();
  const spiderW = spider.clientWidth;
  const spiderH = spider.clientHeight;
  const Y = e.clientY - areaCoords.top - area.clientTop - spiderH / 2;
  const X = e.clientX - areaCoords.left - area.clientLeft - spiderW / 2;
  let myTop = Y < 0 ? 0 : Y;
  let myLeft = X < 0 ? 0 : X;

  if (Y + spiderH > area.clientHeight) {
    myTop = area.clientHeight - spiderH;
  }

  if (X + spiderW > area.clientWidth) {
    myLeft = area.clientWidth - spiderW;
  }

  spider.style.cssText = `
  top: ${myTop}px;
  left: ${myLeft}px;
  `;
});
