'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.closest('.wall')) {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const spiderCenterX = spiderRect.width / 2;
    const spiderCenterY = spiderRect.height / 2;

    let newX = e.clientX - wallRect.left - spiderCenterX;
    let newY = e.clientY - wallRect.top - spiderCenterY;

    if (newX < 0) {
      newX = 0;
    } else if (newX > wallRect.width - spiderRect.width) {
      newX = wallRect.width - spiderRect.width;
    }

    if (newY < 0) {
      newY = 0;
    } else if (newY > wallRect.height - spiderRect.height) {
      newY = wallRect.height - spiderRect.height;
    }

    spider.style.left = `${newX}px`;
    spider.style.top = `${newY}px`;
  }
});
