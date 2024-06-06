'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('img');

wall.addEventListener('click', (e) => {
  const maxW = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let spiderY =
    e.clientY - wall.getBoundingClientRect().top - spider.clientHeight / 2 - 10;
  let spiderX =
    e.clientX - wall.getBoundingClientRect().left - spider.clientWidth / 2 - 10;

  if (spiderX > maxW) {
    spiderX = maxW;
  }

  if (spiderY > maxY) {
    spiderY = maxY;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
