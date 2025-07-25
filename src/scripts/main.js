'use strict';

const wall = document.querySelector('.wall');
const spider = wall.children[0];
const spiderRect = spider.getBoundingClientRect();

const spiderHeight = spiderRect.height;
const spiderWidth = spiderRect.width;

const wallStyles = getComputedStyle(wall);
const wallBorder = parseFloat(wallStyles.borderWidth);

const wallHeight = wall.offsetHeight - wallBorder * 2;
const wallWidth = wall.offsetWidth - wallBorder * 2;

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  let x = e.offsetX - spiderHeight / 2;
  let y = e.offsetY - spiderWidth / 2;
  // допустимі значення

  x = Math.max(0, Math.min(x, wallWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wallHeight - spiderHeight));
  // корегування у випадку виходу за межі стіни

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
