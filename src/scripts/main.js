'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  if (!wall || !spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.getBoundingClientRect().width;
  const spiderHeight = spider.getBoundingClientRect().height;

  const relativeX = e.clientX - wallRect.left;
  const relativeY = e.clientY - wallRect.top;

  let newLeft = relativeX - spiderWidth / 2;
  let newTop = relativeY - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
