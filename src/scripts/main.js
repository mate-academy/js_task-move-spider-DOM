'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (wall && spider) {
  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }
  spider.style.position = 'absolute';

  document.addEventListener('click', (e) => {
    const rect = wall.getBoundingClientRect();

    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      return;
    }

    const xIn = e.clientX - rect.left - wall.clientLeft;
    const yIn = e.clientY - rect.top - wall.clientTop;

    const halfW = spider.offsetWidth / 2;
    const halfH = spider.offsetHeight / 2;

    const centerX = Math.max(halfW, Math.min(xIn, wall.clientWidth - halfW));
    const centerY = Math.max(halfH, Math.min(yIn, wall.clientHeight - halfH));

    spider.style.left = `${centerX - halfW}px`;
    spider.style.top = `${centerY - halfH}px`;
  });
}
