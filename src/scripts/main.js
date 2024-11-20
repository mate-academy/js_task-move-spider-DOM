'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;

  let spiderX =
    e.clientX - wall.getBoundingClientRect().left - spider.offsetWidth / 2 - 10;

  let spiderY =
    e.clientY - wall.getBoundingClientRect().top - spider.offsetHeight / 2 - 10;

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderY > maxHeight) {
    spiderY = maxHeight;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderX > maxWidth) {
    spiderX = maxWidth;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
