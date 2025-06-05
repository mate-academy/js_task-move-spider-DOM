'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();
  const border = parseInt(getComputedStyle(wall).borderWidth);

  const contentWidth = wallRect.width - 2 * border;
  const contentHeight = wallRect.height - 2 * border;

  const maxX = contentWidth - spiderRect.width;
  const maxY = contentHeight - spiderRect.height;

  let spiderX = e.clientX - wallRect.left - border - spiderRect.width / 2;
  let spiderY = e.clientY - wallRect.top - border - spiderRect.height / 2;

  spiderX = Math.max(0, Math.min(spiderX, maxX));
  spiderY = Math.max(0, Math.min(spiderY, maxY));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
