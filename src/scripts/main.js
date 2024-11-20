'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallStyles = getComputedStyle(wall);
const wallWidth = parseInt(wallStyles.width);
const wallHeight = parseInt(wallStyles.height);
const wallBorderWidth = parseInt(wallStyles.borderWidth);

const spiderStyles = getComputedStyle(spider);
const spiderWidth = parseInt(spiderStyles.width);
const spiderHeight = parseInt(spiderStyles.height);

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

wall.addEventListener('click', (e) => {
  const targetTop = clamp(
    e.clientY -
      spiderHeight / 2 -
      wallBorderWidth -
      wall.getBoundingClientRect().top,
    0,
    wallHeight - spiderHeight,
  );

  const targetLeft = clamp(
    e.clientX -
      spiderWidth / 2 -
      wallBorderWidth -
      wall.getBoundingClientRect().left,
    0,
    wallWidth - spiderWidth,
  );

  spider.style.top = `${targetTop}px`;
  spider.style.left = `${targetLeft}px`;
});
