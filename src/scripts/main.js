'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallY = wall.getBoundingClientRect().top;
const wallX = wall.getBoundingClientRect().left;

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  let spiderX = e.clientX - wallX - (spider.clientWidth / 2);
  let spiderY = e.clientY - wallY - (spider.clientHeight / 2);

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderX + spider.clientWidth > wall.clientWidth) {
    spiderX = wall.clientWidth - spider.clientWidth;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderY + spider.clientHeight > wall.clientHeight) {
    spiderY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.top = spiderY + 'px';
  spider.style.left = spiderX + 'px';
});
