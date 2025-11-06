'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let spiderX = clickX - spiderRect.width / 2;
  let spiderY = clickY - spiderRect.height / 2;

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderX > wallRect.width - spiderRect.width) {
    spiderX = wallRect.width - spiderRect.width;
  }

  if (spiderY > wallRect.height - spiderRect.height) {
    spiderY = wallRect.height - spiderRect.height;
  }

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
