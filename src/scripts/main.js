'use strict';

// src/scripts/main.js
document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (wall && spider) {
    const wallCS = getComputedStyle(wall);

    if (wallCS.position === 'static') {
      wall.style.position = 'relative';
    }

    const spCS = getComputedStyle(spider);

    if (spCS.position !== 'absolute' && spCS.position !== 'fixed') {
      spider.style.position = 'absolute';
    }

    if (spider.parentElement !== wall) {
      wall.appendChild(spider);
    }

    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const sw = spiderRect.width;
    const sh = spiderRect.height;

    const localX = e.clientX - wallRect.left;
    const localY = e.clientY - wallRect.top;

    const minX = sw / 2;
    const maxX = wallRect.width - sw / 2;
    const minY = sh / 2;
    const maxY = wallRect.height - sh / 2;

    const cx = Math.max(minX, Math.min(localX, maxX));
    // eslint-disable-next-line no-shadow
    const cy = Math.max(minY, Math.min(localY, maxY));

    // перевод центра -> в левый верхний угол
    const left = cx - sw / 2;
    // eslint-disable-next-line no-shadow
    const top = cy - sh / 2;

    spider.style.left = left + 'px';
    spider.style.top = top + 'px';
  }
});
