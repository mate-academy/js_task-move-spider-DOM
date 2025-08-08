'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const style = getComputedStyle(wall);
  const borderLeft = parseFloat(style.borderLeftWidth);
  const borderTop = parseFloat(style.borderTopWidth);

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();

    const halfSpiderWidth = spider.offsetWidth / 2;
    const halfSpiderHeight = spider.offsetHeight / 2;

    let clickX = e.clientX - wallRect.left - borderLeft;
    let clickY = e.clientY - wallRect.top - borderTop;

    const innerW = wall.clientWidth;
    const innerH = wall.clientHeight;

    clickX = Math.max(
      halfSpiderWidth,
      Math.min(clickX, innerW - halfSpiderWidth),
    );

    clickY = Math.max(
      halfSpiderHeight,
      Math.min(clickY, innerH - halfSpiderHeight),
    );

    spider.style.left = `${clickX - halfSpiderWidth}px`;
    spider.style.top = `${clickY - halfSpiderHeight}px`;
  });
});
