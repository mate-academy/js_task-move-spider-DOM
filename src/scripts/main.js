'use strict';

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

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();

    const spiderW = spider.offsetWidth;
    const spiderH = spider.offsetHeight;

    const localX = e.clientX - wallRect.left;
    const localY = e.clientY - wallRect.top;

    if (
      localX < 0 ||
      localX > wallRect.width ||
      localY < 0 ||
      localY > wallRect.height
    ) {
      return;
    }

    const minX = spiderW / 2;
    const maxX = wallRect.width - spiderW / 2;
    const minY = spiderH / 2;
    const maxY = wallRect.height - spiderH / 2;

    const centerX = Math.max(minX, Math.min(localX, maxX));
    const centerY = Math.max(minY, Math.min(localY, maxY));

    const leftPx = centerX - spiderW / 2;
    const topPx = centerY - spiderH / 2;

    spider.style.left = leftPx + 'px';
    spider.style.top = topPx + 'px';
  });
}
