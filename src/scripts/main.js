'use strict';

document.addEventListener('click', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (wall && spider) {
    wall.addEventListener('click', (e) => {
      const wallRect = wall.getBoundingClientRect();
      const spiderRect = spider.getBoundingClientRect();
      let newX = e.clientX - wallRect.left - spiderRect.width / 2;
      let newY = e.clientY - wallRect.top - spiderRect.height / 2;

      newX = Math.max(0, Math.min(newX, wallRect.width - spiderRect.width));
      newY = Math.max(0, Math.min(newY, wallRect.height - spiderRect.height));

      spider.style.left = `${newX}px`;
      spider.style.top = `${newY}px`;
    });
  }
});
