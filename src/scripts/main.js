'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const computedStyle = getComputedStyle(wall);
  const borderLeft = parseInt(computedStyle.borderLeftWidth, 10);
  const borderTop = parseInt(computedStyle.borderTopWidth, 10);

  const spiderHalfWidth = spiderRect.width / 2;
  const spiderHalfHeight = spiderRect.height / 2;

  let newLeft = e.clientX - wallRect.left - borderLeft - spiderHalfWidth;
  let newTop = e.clientY - wallRect.top - borderTop - spiderHalfHeight;

  const minLeft = 0;
  const minTop = 0;
  const maxLeft = wallRect.width - spiderRect.width - borderLeft * 2;
  const maxTop = wallRect.height - spiderRect.height - borderTop * 2;

  newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
  newTop = Math.max(minTop, Math.min(newTop, maxTop));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
