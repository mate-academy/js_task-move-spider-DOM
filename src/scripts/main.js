'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  let distanceToLeft =
    e.clientX - wall.offsetLeft - wall.clientLeft - spider.offsetWidth / 2;
  let distanceToTop =
    e.clientY - wall.offsetTop - wall.clientTop - spider.offsetWidth / 2;

  if (distanceToLeft < 0) {
    distanceToLeft = 0;
  }

  if (distanceToLeft > wall.clientWidth - spider.offsetWidth) {
    distanceToLeft = wall.clientWidth - spider.offsetWidth;
  }

  if (distanceToTop < 0) {
    distanceToTop = 0;
  }

  if (distanceToTop > wall.clientWidth - spider.offsetWidth) {
    distanceToTop = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.left = distanceToLeft + 'px';
  spider.style.top = distanceToTop + 'px';
});
