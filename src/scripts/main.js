'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const centerSpider = spider.offsetWidth / 2;
  const edge = wall.clientWidth;
  const x = e.offsetX < centerSpider ? centerSpider : e.offsetX;
  const y = e.offsetY < centerSpider ? centerSpider : e.offsetY;

  if (e.target.closest('.wall')) {
    const posX =
      (x + centerSpider > edge ? edge - centerSpider : x) - centerSpider;
    const posY =
      (y + centerSpider > edge ? edge - centerSpider : y) - centerSpider;

    spider.style.cssText = `
    transform: translate(${posX}px, ${posY}px);
    `;
  }
});
