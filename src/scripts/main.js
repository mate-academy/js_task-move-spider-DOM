'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const clickX = e.clientX + window.scrollX;
  const clickY = e.clientY + window.scrollY;

  let spiderX = clickX - spiderWidth / 2;
  let spiderY = clickY - spiderHeight / 2;

  const wallRect = wall.getBoundingClientRect();

  if (spiderX < wallRect.left + window.scrollX) {
    spiderX = wallRect.left + window.scrollX;
  }

  if (spiderX + spiderWidth > wallRect.right + window.scrollX) {
    spiderX = wallRect.right + window.scrollX - spiderWidth;
  }

  if (spiderY < wallRect.top + window.scrollY) {
    spiderY = wallRect.top + window.scrollY;
  }

  if (spiderY + spiderHeight > wallRect.bottom + window.scrollY) {
    spiderY = wallRect.bottom + window.scrollY - spiderHeight;
  }

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
