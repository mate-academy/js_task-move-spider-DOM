'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const aboutWall = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  const topY = aboutWall.top + wall.clientTop;
  const bottomY = topY + wall.clientHeight;

  const leftX = aboutWall.left + wall.clientLeft;
  const rightX = leftX + wall.clientWidth;

  let spiderX = e.clientX - leftX - spider.clientWidth / 2;
  let spiderY = e.clientY - topY - spider.clientHeight / 2;

  if (e.clientX - leftX < spider.clientWidth / 2) {
    spiderX = 0;
  }

  if (e.clientY - topY < spider.clientHeight / 2) {
    spiderY = 0;
  }

  if (e.clientX > rightX - spider.clientWidth / 2) {
    spiderX = wall.clientWidth - spider.clientWidth;
  }

  if (e.clientY > bottomY - spider.clientHeight / 2) {
    spiderY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
