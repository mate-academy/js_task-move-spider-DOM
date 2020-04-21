'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallPos = e.target.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;

  const spiderPos = {
    left: x - wallPos.left - wall.clientLeft - spider.clientWidth / 2,
    top: y - wallPos.top - wall.clientTop - spider.clientHeight / 2,
  };

  if (spiderPos.top < 0) {
    spiderPos.top = 0;
  }

  if (spiderPos.left < 0) {
    spiderPos.left = 0;
  }

  if (spiderPos.left + spider.clientWidth > wall.clientWidth) {
    spiderPos.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderPos.top + spider.clientHeight > wall.clientHeight) {
    spiderPos.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderPos.left}px`;
  spider.style.top = `${spiderPos.top}px`;
});
