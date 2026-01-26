'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const width = wall.clientWidth - spider.offsetWidth;
const height = wall.clientHeight - spider.offsetHeight;

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wall')) {
    spider.style.left = `${Math.max(0, Math.min(width, e.offsetX - spider.offsetWidth / 2))}px`;
    spider.style.top = `${Math.max(0, Math.min(height, e.offsetY - spider.offsetHeight / 2))}px`;
  }
});
