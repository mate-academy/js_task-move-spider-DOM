'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const wallLeft = wallRect.left;
  const wallTop = wallRect.top;
  const wallWidth = wallRect.width;
  const wallHeight = wallRect.height;

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  let spiderLeft = e.clientX - wallLeft - spiderWidth / 2;
  let spiderTop = e.clientY - wallTop - spiderHeight / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  } else if (spiderLeft + spiderWidth > wallWidth) {
    spiderLeft = wallWidth - spiderWidth;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  } else if (spiderTop + spiderHeight > wallHeight) {
    spiderTop = wallHeight - spiderHeight;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
