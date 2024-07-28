'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallRect = wall.getBoundingClientRect();
  const border = wallRect.width - wall.clientWidth;
  let x = e.clientX - wallRect.left - spiderWidth / 2 - border / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2 - border / 2;

  if (y < 0) {
    y = 0;
  }

  if (x < 0) {
    x = 0;
  }

  if (x + spiderWidth > wallRect.width) {
    x = wallRect.width - spiderWidth - border;
  }

  if (y + spiderHeight > wallRect.height) {
    y = wallRect.height - spiderHeight - border;
  }

  if (!wall.contains(e.target)) {
    return;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
