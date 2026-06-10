'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  // only respond to clicks inside the wall area
  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // border widths (clientLeft/clientTop give border sizes)
  const borderLeft = wall.clientLeft || 0;
  const borderTop = wall.clientTop || 0;

  // Coordinates relative to the inner content area of the wall
  const relativeX = e.clientX - wallRect.left - borderLeft;
  const relativeY = e.clientY - wallRect.top - borderTop;

  // center the spider under pointer
  let left = relativeX - spiderWidth / 2;
  let topPos = relativeY - spiderHeight / 2;

  // clamp so spider doesn't cross wall boundaries
  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  left = Math.max(0, Math.min(left, maxLeft));
  topPos = Math.max(0, Math.min(topPos, maxTop));

  spider.style.left = left + 'px';
  spider.style.top = topPos + 'px';
});
