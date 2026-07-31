'use strict';

document.addEventListener('click', (evt) => {
  const wall = document.querySelector('.wall');

  if (evt.target.closest('.wall')) {
    const spider = document.querySelector('.spider');
    const getOffsetWall = wall.getBoundingClientRect();

    const x = evt.clientX;
    const y = evt.clientY;

    const posX = x - getOffsetWall.left - wall.clientLeft;
    const posY = y - getOffsetWall.top - wall.clientTop;

    const posSpiderX = posX - spider.offsetWidth / 2;
    const posSpiderY = posY - spider.offsetHeight / 2;

    const maxLeft = wall.clientWidth - spider.offsetWidth;
    const maxTop = wall.clientHeight - spider.offsetHeight;

    const coordX = Math.max(0, Math.min(posSpiderX, maxLeft));
    const coordY = Math.max(0, Math.min(posSpiderY, maxTop));

    spider.style.left = `${coordX}px`;
    spider.style.top = `${coordY}px`;
  }
});
