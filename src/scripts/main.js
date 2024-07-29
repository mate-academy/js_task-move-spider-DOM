'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const centerSpider = spider.offsetWidth / 2;
  const edge = wall.clientWidth;

  if (e.target.closest('.wall')) {
    const newX = x < centerSpider ? centerSpider : x;
    const rightX = newX + centerSpider > edge ? edge - centerSpider : newX;
    const newY = y < centerSpider ? centerSpider : y;
    const bottomY = newY + centerSpider > edge ? edge - centerSpider : newY;

    spider.style.cssText = `
    transform: translate(${rightX - centerSpider}px, ${bottomY - centerSpider}px);
    `;
  }
});
