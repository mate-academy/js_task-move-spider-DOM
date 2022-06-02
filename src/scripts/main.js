'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const rect = wall.getBoundingClientRect();
  const border = 10;

  const y = e.clientY - spider.height / 2;
  const x = e.clientX - spider.width / 2;

  spider.style.left = `${x - rect.left - border}px`;
  spider.style.top = `${y - rect.top - border}px`;

  if (x < rect.left) {
    spider.style.left = 0;
  }

  if (y < rect.top) {
    spider.style.top = 0;
  }

  if (x > rect.right - border - spider.width) {
    spider.style.left = `350px`;
  }

  if (y > rect.bottom - border - spider.width) {
    spider.style.top = `350px`;
  }
});
