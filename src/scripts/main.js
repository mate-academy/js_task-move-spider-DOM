'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className !== 'wall') {
    return;
  }

  const xCoords = e.clientX;
  const yCoords = e.clientY;

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const {
    top: wallTop,
    left: wallLeft,
    width: wallWidth,
    height: wallHeight,
  } = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallStyle = window.getComputedStyle(wall);
  const borderWidth = wallStyle.getPropertyValue('border-width');
  const borderWidthValue = parseFloat(borderWidth);

  let spiderX = xCoords - wallLeft - spiderWidth / 2 - borderWidthValue;
  let spiderY = yCoords - wallTop - spiderHeight / 2 - borderWidthValue;

  const maxX = wallWidth - spiderWidth - borderWidthValue * 2;
  const maxY = wallHeight - spiderHeight - borderWidthValue * 2;

  spiderX = Math.max(0, Math.min(spiderX, maxX));
  spiderY = Math.max(0, Math.min(spiderY, maxY));

  spider.style.cssText = `
    top: ${spiderY}px;
    left: ${spiderX}px;
    `;
});
