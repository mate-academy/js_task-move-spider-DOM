'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  // Get click position relative to the wall
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let targetX = e.clientX - wallRect.left - spiderWidth / 2;
  let targetY = e.clientY - wallRect.top - spiderHeight / 2;

  // Ensure spider does not move outside the wall
  targetX = Math.max(0, Math.min(targetX, wallRect.width - spiderWidth));
  targetY = Math.max(0, Math.min(targetY, wallRect.height - spiderHeight));

  targetX = Math.round(targetX);
  targetY = Math.round(targetY);

  //  Move the spider
  spider.style.position = 'absolute';
  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
