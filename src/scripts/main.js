'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();

    const computedStyle = window.getComputedStyle(wall);
    const borderLeft = parseInt(computedStyle.borderLeftWidth);
    const borderRight = parseInt(computedStyle.borderRightWidth);
    const borderTop = parseInt(computedStyle.borderTopWidth);
    const borderBottom = parseInt(computedStyle.borderBottomWidth);

    const innerWidth = wallRect.width - borderLeft - borderRight;
    const innerHeight = wallRect.height - borderTop - borderBottom;

    const clickX = e.clientX - wallRect.left;
    const clickY = e.clientY - wallRect.top;

    let newLeft = clickX - spider.offsetWidth / 2 - borderLeft;
    console.log(clickX);
    console.log(spider.offsetWidth / 2);

    let newTop = clickY - spider.offsetHeight / 2 - borderTop;

    newLeft = Math.max(0, Math.min(newLeft, innerWidth - spider.offsetWidth));
    newTop = Math.max(0, Math.min(newTop, innerHeight - spider.offsetHeight));

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
