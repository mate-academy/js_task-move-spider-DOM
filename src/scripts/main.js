'use strict';

const spider = document.querySelector('.spider');
const spiderCenterX = spider.clientWidth / 2;
const spiderCenterY = spider.clientHeight / 2;

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (wall) {
    const rect = wall.getBoundingClientRect();
    const style = window.getComputedStyle(wall);

    const borderLeft = parseFloat(style.borderLeftWidth);
    const borderTop = parseFloat(style.borderTopWidth);

    const leftPos = e.clientX - rect.left - borderLeft;
    const topPos = e.clientY - rect.top - borderTop;
    const rightPos = e.clientX - rect.right + borderLeft;
    const bottomPos = e.clientY - rect.bottom + borderTop;

    const spiderPositionLeft = leftPos - spiderCenterX;
    const spiderPositionTop = topPos - spiderCenterY;
    const spiderPositionRight = rightPos + spiderCenterX;
    const spiderPositionBottom = bottomPos + spiderCenterY;

    if (spiderPositionRight > 0) {
      spider.style.left = spiderPositionLeft - spiderPositionRight + 'px';
    } else if (spiderPositionLeft < 0) {
      spider.style.left = 0 + 'px';
    } else {
      spider.style.left = spiderPositionLeft + 'px';
    }

    if (spiderPositionBottom > 0) {
      spider.style.top = spiderPositionTop - spiderPositionBottom + 'px';
    } else if (spiderPositionTop < 0) {
      spider.style.top = 0 + 'px';
    } else {
      spider.style.top = spiderPositionTop + 'px';
    }
  }
});
