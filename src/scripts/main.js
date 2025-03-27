'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  document.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const spiderHalfWidth = spiderRect.width / 2;
    const spiderHalfHeight = spiderRect.height / 2;

    let newX = e.clientX - wallRect.left - spiderHalfWidth;
    let newY = e.clientY - wallRect.top - spiderHalfHeight;

    // Constrain within wall boundaries
    newX = Math.max(0, Math.min(newX, wallRect.width - spiderRect.width));
    newY = Math.max(0, Math.min(newY, wallRect.height - spiderRect.height));

    spider.style.transform = `translate(${newX}px, ${newY}px)`;
  });
});
