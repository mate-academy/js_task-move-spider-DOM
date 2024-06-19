'use strict';

const BORDER_WIDTH = 10;
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function calculatePostion(current, min, max) {
  if (current < min) {
    return min;
  }

  if (current > max) {
    return max;
  }

  return current;
}

function checkIsInRange(clientX, clientY, surfaceRect) {
  const isInXRange =
    clientX > surfaceRect.x && clientX < surfaceRect.x + surfaceRect.width;

  const isInYRange =
    clientY > surfaceRect.y && clientY < surfaceRect.y + surfaceRect.height;

  return isInXRange && isInYRange;
}

document.addEventListener('click', (e) => {
  const { clientX, clientY } = e;

  const wallRect = wall.getBoundingClientRect();

  const isInRange = checkIsInRange(clientX, clientY, wallRect);

  if (isInRange) {
    // We are already have this props in the event,
    // but the task says use clientX/clientY
    const offsetX = Math.round(clientX - BORDER_WIDTH - wallRect.x);
    const offsetY = Math.round(clientY - BORDER_WIDTH - wallRect.y);

    const xCoord = offsetX - spider.width / 2;
    const yCoord = offsetY - spider.height / 2;

    const minLeft = 0;
    const minTop = 0;
    const maxLeft = wallRect.width - spider.width - BORDER_WIDTH * 2;
    const maxTop = wallRect.height - spider.height - BORDER_WIDTH * 2;

    const leftPos = calculatePostion(xCoord, minLeft, maxLeft);
    const topPos = calculatePostion(yCoord, minTop, maxTop);

    spider.style.cssText = `left: ${leftPos}px; top: ${topPos}px`;
  }
});
