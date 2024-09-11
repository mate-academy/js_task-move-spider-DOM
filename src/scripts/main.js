'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const computedStyle = getComputedStyle(wall);
  const borderLeft = parseFloat(computedStyle.borderLeftWidth);
  const borderTop = parseFloat(computedStyle.borderTopWidth);

  const pointerX = e.clientX - wallRect.left - borderLeft;
  const pointerY = e.clientY - wallRect.top - borderTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const spiderCenterX = spiderWidth / 2;
  const spiderCenterY = spiderHeight / 2;

  const minX = 0;
  const minY = 0;
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  let newX = pointerX - spiderCenterX;
  let newY = pointerY - spiderCenterY;

  newX = Math.max(minX, Math.min(newX, maxX));
  newY = Math.max(minY, Math.min(newY, maxY));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
