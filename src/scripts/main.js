'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  e.preventDefault();

  if (e.target.className === 'wall') {
    const wallRect = wall.getBoundingClientRect();
    const spiderHeight = spider.offsetHeight;
    const spiderWidth = spider.offsetWidth;

    let positionX = e.clientX - wallRect.left - spiderWidth / 2;
    let positionY = e.clientY - wallRect.top - spiderHeight / 2;

    if (positionY < 0) {
      positionY = 0;
    } else if (positionY + spiderHeight > wallRect.height) {
      positionY = wallRect.height - spiderHeight;
    }

    if (positionX < 0) {
      positionX = 0;
    } else if (positionX + spiderWidth > wallRect.width) {
      positionX = wallRect.width - spiderWidth;
    }

    spider.style.top = `${positionY}px`;
    spider.style.left = `${positionX}px`;
  }
});
