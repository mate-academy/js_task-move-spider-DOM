'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (ev) => {
    // spider size
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    // top and left of the wall
    const wallRect = wall.getBoundingClientRect();

    // coordinates of the cursor click
    const clickX = ev.clientX + window.scrollX - wallRect.left;
    const clickY = ev.clientY + window.scrollY - wallRect.top;

    // setting the center of the spider
    let newLeft = clickX - spiderWidth / 2;
    let newTop = clickY - spiderHeight / 2;

    // wall restriction
    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newLeft > wall.clientWidth - spiderWidth) {
      newLeft = wall.clientWidth - spiderWidth;
    }

    if (newTop < 0) {
      newTop = 0;
    }

    if (newTop > wall.clientHeight - spiderHeight) {
      newTop = wall.clientHeight - spiderHeight;
    }

    // new spider position
    spider.style.position = 'absolute';
    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
