'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const currentCord = e.currentTarget.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const workingWidth =
    Math.floor(currentCord.width / spiderWidth) * spiderWidth;

  let cursorX =
    e.clientX - currentCord.left - (currentCord.width - workingWidth) / 2;
  let cursorY =
    e.clientY - currentCord.top - (currentCord.width - workingWidth) / 2;

  cursorX -= spiderWidth / 2;
  cursorY -= spiderHeight / 2;

  cursorX = Math.max(0, Math.min(cursorX, workingWidth - spiderWidth));
  cursorY = Math.max(0, Math.min(cursorY, workingWidth - spiderWidth));

  spider.style.left = `${cursorX}px`;
  spider.style.top = `${cursorY}px`;
});
