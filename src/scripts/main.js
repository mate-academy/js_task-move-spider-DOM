'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const border = parseFloat(
  window.getComputedStyle(wall).getPropertyValue('border-width'),
);
const min = 0;
const maxX = wall.clientWidth - spider.offsetWidth;
const maxY = wall.clientHeight - spider.offsetHeight;

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const clickTop =
      e.clientY - wall.offsetTop - spider.offsetHeight / 2 - border;

    const clickLeft =
      e.clientX - wall.offsetLeft - spider.offsetWidth / 2 - border;

    const spiderTop = Math.max(min, Math.min(clickTop, maxY));
    const spiderLeft = Math.max(min, Math.min(clickLeft, maxX));

    spider.style.top = spiderTop + 'px';
    spider.style.left = spiderLeft + 'px';
  }
});
