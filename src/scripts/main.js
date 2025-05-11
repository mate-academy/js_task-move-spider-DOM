'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    // eslint-disable-next-line no-console
    console.error('Wall or spider element not found');

    return;
  }

  wall.addEventListener('click', function (e) {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    let newX = e.clientX - wallRect.left - spiderRect.width / 2;
    let newY = e.clientY - wallRect.top - spiderRect.height / 2;

    newX = Math.max(0, Math.min(newX, wallRect.width - spiderRect.width));
    newY = Math.max(0, Math.min(newY, wallRect.height - spiderRect.height));

    spider.style.position = 'absolute';
    spider.style.left = `${newX}px`;
    spider.style.top = `${newY}px`;
  });
});
