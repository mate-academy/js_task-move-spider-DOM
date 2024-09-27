'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const clientX = e.clientX;
  const clientY = e.clientY;

  const { height: spiderHeight, width: spiderWidth } =
    spider.getBoundingClientRect();

  const {
    top: wallTop,
    bottom: wallBottom,
    left: wallLeft,
    right: wallRight,
  } = wall.getBoundingClientRect();

  if (
    clientY < wallTop ||
    clientY > wallBottom ||
    clientX < wallLeft ||
    clientX > wallRight
  ) {
    return;
  }

  const wallStyle = getComputedStyle(wall);
  const borderWidth = parseFloat(wallStyle.borderWidth);

  const newTop = clientY - wallTop - borderWidth - spiderHeight / 2;

  if (newTop < 0) {
    spider.style.top = '0px';
  } else if (newTop + spiderHeight > wall.clientHeight) {
    spider.style.top = `${wall.clientHeight - spiderHeight}px`;
  } else {
    spider.style.top = `${newTop}px`;
  }

  const newLeft = clientX - wallLeft - borderWidth - spiderWidth / 2;

  if (newLeft < 0) {
    spider.style.left = '0px';
  } else if (newLeft + spiderWidth > wall.clientWidth) {
    spider.style.left = `${wall.clientWidth - spiderWidth}px`;
  } else {
    spider.style.left = `${newLeft}px`;
  }
});
