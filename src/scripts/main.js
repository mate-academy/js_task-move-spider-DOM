'use strict';

document.addEventListener('click', (e) => {
  // write code here

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  let newX = e.clientX - wallRect.left - spiderWidth / 2;
  let newY = e.clientY - wallRect.top - spiderHeight / 2;

  newX = Math.max(0, Math.min(newX, wallRect.width - spiderWidth));
  newY = Math.max(0, Math.min(newY, wallRect.height - spiderHeight));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
