'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    const rect = wall.getBoundingClientRect();

    const coorX
      = e.clientX - rect.left - (spider.offsetWidth / 2) - wall.clientLeft;
    const coorY
      = e.clientY - rect.top - (spider.offsetHeight / 2) - wall.clientTop;

    spider.style.left = coorX + 'px';
    spider.style.top = coorY + 'px';

    const maxX = rect.width - (wall.clientLeft * 2) - spider.offsetWidth;
    const maxY = rect.height - (wall.clientTop * 2) - spider.offsetHeight;
    const minX = 0;
    const minY = 0;

    if (coorX > maxX) {
      spider.style.left = maxX + 'px';
    };

    if (coorY > maxY) {
      spider.style.top = maxY + 'px';
    };

    if (coorX < minX) {
      spider.style.left = minX + 'px';
    };

    if (coorY < minY) {
      spider.style.top = minY + 'px';
    };
  };
});
