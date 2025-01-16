'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallSize = wall.getBoundingClientRect();

  if (!e.target.closest('.wall')) {
    return;
  }

  const spiderX =
    e.clientX - wallSize.left - wall.clientLeft - spider.width / 2;
  const spiderY = e.clientY - wallSize.top - wall.clientTop - spider.height / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  spider.style.left = `${Math.max(0, Math.min(spiderX, maxLeft))}px`;
  spider.style.top = `${Math.max(0, Math.min(spiderY, maxTop))}px`;
});
