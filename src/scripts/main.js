'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const relX = e.clientX - wall.offsetLeft - wall.clientLeft;
  const relY = e.clientY - wall.offsetTop - wall.clientTop;

  let left = relX - spider.offsetWidth / 2;
  let topy = relY - spider.offsetHeight / 2;

  left = Math.max(0, Math.min(left, wall.clientWidth - spider.offsetWidth));
  topy = Math.max(0, Math.min(topy, wall.clientHeight - spider.offsetHeight));

  spider.style.left = left + 'px';
  spider.style.top = topy + 'px';
});
