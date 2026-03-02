'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  let finalX = e.clientX - rect.left - spider.offsetWidth / 2;
  let finalY = e.clientY - rect.top - spider.offsetHeight / 2;

  if (finalX < 0) {
    finalX = 0;
  }

  if (finalX > wall.clientWidth - spider.offsetWidth) {
    finalX = wall.clientWidth - spider.offsetWidth;
  }

  if (finalY < 0) {
    finalY = 0;
  }

  if (finalY > wall.clientHeight - spider.offsetHeight) {
    finalY = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = finalX + 'px';
  spider.style.top = finalY + 'px';
});
