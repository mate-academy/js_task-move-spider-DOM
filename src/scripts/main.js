'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderSize = spider.getBoundingClientRect();
  const wallSize = wall.getBoundingClientRect();
  const wallOffset = 10;

  let newX = e.clientX - wallSize.left - spiderSize.width / 2 - wallOffset;
  let newY = e.clientY - wallSize.top - spiderSize.height / 2 - wallOffset;

  newX = Math.max(0, Math.min(newX, wallSize.width - spiderSize.width));
  newY = Math.max(0, Math.min(newY, wallSize.height - spiderSize.height));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
