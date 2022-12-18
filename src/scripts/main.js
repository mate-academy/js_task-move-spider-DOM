'use strict';

document.addEventListener('click', e => {
  // write code here
  if (!e.target.closest('.wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const coordinateX = e.offsetX - spider.clientWidth / 2;
  const coordinateY = e.offsetY - spider.clientHeight / 2;
  const wallSize = parseFloat(wall.clientWidth) - spider.clientWidth;

  spider.style.left = coordinateX < 0
    ? 0 : coordinateX > wallSize ? `${wallSize}px` : `${coordinateX}px`;

  spider.style.top = coordinateY < 0
    ? 0 : coordinateY > wallSize ? `${wallSize}px` : `${coordinateY}px`;
});
