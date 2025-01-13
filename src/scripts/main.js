'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallSpace = wall.getBoundingClientRect();
  const spiderSpace = spider.getBoundingClientRect();

  const wallStyle = getComputedStyle(wall);

  const borderHorizontalWidth =
    parseFloat(wallStyle.borderLeftWidth) +
    parseFloat(wallStyle.borderRightWidth);

  const borderVerticalWidth =
    parseFloat(wallStyle.borderTopWidth) +
    parseFloat(wallStyle.borderBottomWidth);

  const clickX = e.clientX - wallSpace.left;
  const clickY = e.clientY - wallSpace.top;

  const newLeft = Math.min(
    Math.max(clickX - spiderSpace.width / 2, 0),
    wallSpace.width - spiderSpace.width - borderHorizontalWidth,
  );

  const newTop = Math.min(
    Math.max(clickY - spiderSpace.height / 2, 0),
    wallSpace.height - spiderSpace.height - borderVerticalWidth,
  );

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
