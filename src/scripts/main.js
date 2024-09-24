'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.currentTarget.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const workingWidth = Math.floor(wall.width / spiderWidth) * spiderWidth;
  let cursorX = e.clientX - wall.left - (wall.width - workingWidth) / 2;
  let cursorY = e.clientY - wall.top - (wall.width - workingWidth) / 2;

  cursorX -= spiderWidth / 2;
  cursorY -= spiderHeight / 2;
  cursorX = Math.max(0, Math.min(cursorX, workingWidth - spiderWidth));
  cursorY = Math.max(0, Math.min(cursorY, workingWidth - spiderWidth));

  spider.style.left = `${cursorX}px`;
  spider.style.top = `${cursorY}px`;
});
