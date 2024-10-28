'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderSize = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX >= wallRect.left &&
    e.clientX <= wallRect.right &&
    e.clientY >= wallRect.top &&
    e.clientY <= wallRect.bottom
  ) {
    let targetX = e.clientX - wallRect.left - spiderSize.width / 2 - 10;
    let targetY = e.clientY - wallRect.top - spiderSize.height / 2 - 10;

    targetX = Math.max(
      0,
      Math.min(targetX, wallRect.width - spiderSize.width - 20),
    );

    targetY = Math.max(
      0,
      Math.min(targetY, wallRect.height - spiderSize.height - 20),
    );

    spider.style.left = `${targetX}px`;
    spider.style.top = `${targetY}px`;
  }
});
