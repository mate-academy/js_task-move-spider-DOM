'use strict';

document.querySelector('.wall').addEventListener('click', e => {
  const wallElem = document.querySelector('.wall');
  const wallClientRect = wallElem.getBoundingClientRect();
  const wallBorder = Number.parseInt(getComputedStyle(wallElem).borderTopWidth);
  const wallLeft = wallClientRect.left + wallBorder + window.pageXOffset;
  const wallTop = wallClientRect.top + wallBorder + window.pageYOffset;
  const wallRight = wallClientRect.right - wallBorder + window.pageXOffset;
  const wallBottom = wallClientRect.bottom - wallBorder + window.pageYOffset;
  const wallHeight = wallBottom - wallTop;
  const wallWidth = wallRight - wallLeft;
  const spiderElem = document.querySelector('.spider');
  const spiderClientRect = spiderElem.getBoundingClientRect();
  const spiderWidth = spiderClientRect.right - spiderClientRect.left;
  const spiderHeight = spiderClientRect.bottom - spiderClientRect.top;
  const coords = {
    left: e.clientX - (spiderWidth) / 2 + window.pageXOffset,
    right: e.clientX + (spiderWidth) / 2 + window.pageXOffset,
    top: e.clientY - (spiderHeight) / 2 + window.pageYOffset,
    bottom: e.clientY + (spiderHeight) / 2 + window.pageYOffset,
  };
  let correctedLeft = coords.left < wallLeft ? 0 : coords.left - wallLeft;

  correctedLeft = coords.right > wallRight
    ? wallWidth - spiderWidth : correctedLeft;

  let correctedTop = coords.top < wallTop ? 0 : coords.top - wallTop;

  correctedTop = coords.bottom > wallBottom
    ? wallHeight - spiderHeight : correctedTop;
  spiderElem.style.left = `${correctedLeft}px`;
  spiderElem.style.top = `${correctedTop}px`;
});
