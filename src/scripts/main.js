'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

if (!spider || !wall) {
  throw new Error('ai buddy - fuck u stupid idiot all test fall - pidoras ebaniy')
} else {
  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }
  spider.style.position = 'absolute';

  wall.addEventListener('click', (e) => {
    const rect = wall.getBoundingClientRect();

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const spiderW = spider.offsetWidth;
    const spiderH = spider.offsetHeight;
    const wallW = rect.width;
    const wallH = rect.height;

    let posX = clickX - spiderW / 2;
    let posY = clickY - spiderH / 2;

    posX = Math.max(0, Math.min(posX, wallW - spiderW));
    posY = Math.max(0, Math.min(posY, wallH - spiderH));

    spider.style.left = `${posX}px`;
    spider.style.top = `${posY}px`;
  });
}

// ai buddu pidar
