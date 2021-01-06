'use strict';

document.addEventListener('click', e => {
  const item = e.target;

  if (!item.classList.contains('wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const computedStyle = window.getComputedStyle(wall, null);
  const wallWidth = parseInt(computedStyle.getPropertyValue('width'));
  const wallHeight = parseInt(computedStyle.getPropertyValue('height'));
  const borderWidthWall = parseInt(computedStyle
    .getPropertyValue('border-width'));

  let coordsY = 0;
  let coordsX = 0;
  const spiderCoordsMinY = `${wall
    .offsetTop + borderWidthWall + spider.height / 2}`;
  const spiderCoordsMaxY = `${wall
    .offsetTop + borderWidthWall + wallHeight - spider.height / 2}`;
  const spiderCoordsMinX = `${wall
    .offsetLeft + borderWidthWall + spider.width / 2}`;
  const spiderCoordsMaxX = `${wall
    .offsetLeft + borderWidthWall + wallWidth - spider.width / 2}`;

  (e.clientY <= spiderCoordsMinY)
    ? coordsY = spiderCoordsMinY
    : (e.clientY >= spiderCoordsMaxY)
      ? coordsY = spiderCoordsMaxY
      : coordsY = e.clientY;

  (e.clientX <= spiderCoordsMinX)
    ? coordsX = spiderCoordsMinX
    : (e.clientX >= spiderCoordsMaxX)
      ? coordsX = spiderCoordsMaxX
      : coordsX = e.clientX;

  spider.style.top = `${coordsY - wall
    .offsetTop - borderWidthWall - spider.width / 2}px`;

  spider.style.left = `${coordsX - wall
    .offsetLeft - borderWidthWall - spider.height / 2}px`;
});
