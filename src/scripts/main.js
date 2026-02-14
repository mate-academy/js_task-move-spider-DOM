'use strict';

document.addEventListener('click', (e) => {
  const currentWall = e.target.closest('.wall')

  if (!currentWall) {
    return;
  }

  const spider = currentWall.querySelector('.spider');

  const wallRect = currentWall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const requiredTop = e.clientY - wallRect.top - spiderHeight / 2;
  const requiredLeft = e.clientX - wallRect.left - spiderWidth / 2;

  const finalTop = Math.max(
    0,
    Math.min(wallRect.height - spiderHeight, requiredTop),
  );
  const finalLeft = Math.max(
    0,
    Math.min(wallRect.width - spiderWidth, requiredLeft),
  );

  spider.style.top = `${finalTop}px`;
  spider.style.left = `${finalLeft}px`;
});
