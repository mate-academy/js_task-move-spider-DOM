'use strict';

const spiderElement = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // write code here

  if (!wallElement.contains(e.target)) {
    return;
  }

  const wallBorderSize = parseInt(getComputedStyle(wallElement).borderWidth);
  const wallDimensions = wallElement.getBoundingClientRect();
  const spiderDimensions = spiderElement.getBoundingClientRect();

  const calculatedX =
    e.clientX -
    wallDimensions.left -
    spiderDimensions.width / 2 -
    wallBorderSize;
  const calculatedY =
    e.clientY -
    wallDimensions.top -
    spiderDimensions.height / 2 -
    wallBorderSize;

  const maxXPosition =
    wallDimensions.width - spiderDimensions.width - 2 * wallBorderSize;
  const maxYPosition =
    wallDimensions.height - spiderDimensions.height - 2 * wallBorderSize;

  const finalXPosition = Math.max(0, Math.min(calculatedX, maxXPosition));
  const finalYPosition = Math.max(0, Math.min(calculatedY, maxYPosition));

  spiderElement.style.left = `${finalXPosition}px`;
  spiderElement.style.top = `${finalYPosition}px`;
});
