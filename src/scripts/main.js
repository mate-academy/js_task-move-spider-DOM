'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const rect = wall.getBoundingClientRect();

  const clickCoordX = e.clientX;
  const clickCoordY = e.clientY;

  const wallBorder = wall.clientTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (wall.contains(e.target)) {
    const x = clickCoordX - rect.left - wallBorder - spiderWidth / 2;
    const y = clickCoordY - rect.top - wallBorder - spiderHeight / 2;

    const maxAvailableLeft = rect.width - spiderWidth - wallBorder * 2;
    const maxAvailableTop = rect.height - spiderHeight - wallBorder * 2;

    if (x < 0) {
      spider.style.left = '0px';
    } else if (x > maxAvailableLeft) {
      spider.style.left = `${maxAvailableLeft}px`;
    } else {
      spider.style.left = `${x}px`;
    }

    if (y < 0) {
      spider.style.top = '0px';
    } else if (y > maxAvailableTop) {
      spider.style.top = `${maxAvailableTop}px`;
    } else {
      spider.style.top = `${y}px`;
    }
  }
});
