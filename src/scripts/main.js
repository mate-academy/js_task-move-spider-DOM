'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;
  const wallRect = wall.getBoundingClientRect();
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;
  let newTop = clickY - spiderHeight / 2;
  let newLeft = clickX - spiderWidth / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
