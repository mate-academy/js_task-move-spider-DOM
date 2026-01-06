'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  let distanceToLeft =
    e.clientX - rect.x - wall.clientLeft - spider.offsetWidth / 2;
  let distanceToTop =
    e.clientY - rect.y - wall.clientTop - spider.offsetHeight / 2;

  if (distanceToLeft < 0) {
    distanceToLeft = 0;
  }

  if (distanceToLeft > wall.clientWidth - spider.offsetWidth) {
    distanceToLeft = wall.clientWidth - spider.offsetWidth;
  }

  if (distanceToTop < 0) {
    distanceToTop = 0;
  }

  if (distanceToTop > wall.clientHeight - spider.offsetHeight) {
    distanceToTop = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = distanceToLeft + 'px';
  spider.style.top = distanceToTop + 'px';
});
