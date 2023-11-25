'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    const wallMaxOffset = 375;
    const wallMinOffset = 25;
    const spiderOffset = 25;

    let x = e.offsetX;
    let y = e.offsetY;

    if (x > wallMaxOffset) {
      x = wallMaxOffset;
    } else if (x < wallMinOffset) {
      x = wallMinOffset;
    }

    if (y > wallMaxOffset) {
      y = wallMaxOffset;
    } else if (y < wallMinOffset) {
      y = wallMinOffset;
    }

    spider.style.marginLeft = (x - spiderOffset) + 'px';
    spider.style.marginTop = (y - spiderOffset) + 'px';
  }
});
