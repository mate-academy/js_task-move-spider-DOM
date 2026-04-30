'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (ev) => {
  const rect = wall.getBoundingClientRect();

  let left =
    event.clientX - rect.left - wall.clientLeft - spider.offsetWidth / 2;
  let topp =
    event.clientY - rect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  left = Math.max(0, Math.min(left, maxLeft));
  topp = Math.max(0, Math.min(topp, maxTop));

  spider.style.left = left + 'px';
  spider.style.top = topp + 'px';
});
