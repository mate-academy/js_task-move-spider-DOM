'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallPosition = e.target.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;

  const spiderPosition = {
    left: x - wallPosition.left - wall.clientLeft - spider.clientWidth / 2,
    top: y - wallPosition.top - wall.clientTop - spider.clientHeight / 2,
  };

  if (spiderPosition.top < 0) {
    spiderPosition.top = 0;
  }

  if (spiderPosition.left < 0) {
    spiderPosition.left = 0;
  }

  if (spiderPosition.left + spider.clientWidth > wall.clientWidth) {
    spiderPosition.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderPosition.top + spider.clientHeight > wall.clientHeight) {
    spiderPosition.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderPosition.left}px`;
  spider.style.top = `${spiderPosition.top}px`;
});
