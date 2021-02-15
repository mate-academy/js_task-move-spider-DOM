'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const borderW = parseFloat(getComputedStyle(wall).borderWidth);
const spiderW = spider.offsetWidth;
const spiderH = spider.offsetHeight;
const leftEdge = wall.getBoundingClientRect().left + borderW;
const topEdge = wall.getBoundingClientRect().top + borderW;
const maxX = wall.clientWidth - spiderW;
const maxY = wall.clientHeight - spiderH;

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  let spiderX = e.clientX - leftEdge - (spiderW / 2);
  let spiderY = e.clientY - topEdge - (spiderH / 2);

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderX > maxX) {
    spiderX = maxX;
  }

  if (spiderY < 0) {
    spiderY = 0;
  } else if (spiderY > maxY) {
    spiderY = maxY;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
