'use strict';

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BODY') {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let spiderX = e.offsetX - spider.clientWidth / 2 || 0;
  let spiderY = e.offsetY - spider.clientHeight / 2 || 0;

  spiderX = Math.max(0, Math.min(spiderX, maxX));
  spiderY = Math.max(0, Math.min(spiderY, maxY));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
