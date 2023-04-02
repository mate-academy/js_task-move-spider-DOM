'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

function centerSpiderCoordinate(
  offsetX,
  offsetY,
  {
    wallLeftBoundary,
    wallRightBoundary,
    wallTopBoundary,
    wallBottomBoundary,
  }) {
  const {
    width: spiderWidth,
    height: spiderHeight,
  } = spiderElement.getBoundingClientRect();

  let centerOffsetX = offsetX - spiderWidth / 2;
  let centerOffsetY = offsetY - spiderHeight / 2;

  if (centerOffsetX < wallLeftBoundary) {
    centerOffsetX = 0;
  }

  if (centerOffsetX + spiderWidth > wallRightBoundary) {
    centerOffsetX = wallRightBoundary - spiderWidth;
  }

  if (centerOffsetY < wallTopBoundary) {
    centerOffsetY = 0;
  }

  if (centerOffsetY + spiderHeight > wallBottomBoundary) {
    centerOffsetY = wallBottomBoundary - spiderHeight;
  }

  return {
    centerOffsetX,
    centerOffsetY,
  };
}

wallElement.addEventListener('click', (e) => {
  const wallRect = wallElement.getBoundingClientRect();
  const borderWidth = parseInt(getComputedStyle(wallElement).borderWidth);

  const wallBoudary = {
    wallLeftBoundary: 0,
    wallRightBoundary: wallRect.width - 2 * borderWidth,
    wallTopBoundary: 0,
    wallBottomBoundary: wallRect.height - 2 * borderWidth,
  };

  const offsetX = e.clientX - wallRect.left - borderWidth;
  const offsetY = e.clientY - wallRect.top - borderWidth;

  const {
    centerOffsetX,
    centerOffsetY,
  } = centerSpiderCoordinate(offsetX, offsetY, wallBoudary);

  spiderElement.style.left = `${centerOffsetX}px`;
  spiderElement.style.top = `${centerOffsetY}px`;
});
