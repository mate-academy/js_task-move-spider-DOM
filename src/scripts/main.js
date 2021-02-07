'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const item = e.target.closest('.wall');

  if (!item || !wall.contains(item)) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();

  let spiderXcoord = e.clientX - wallCoords.left
    - wall.clientLeft - spider.offsetWidth / 2;

  let spiderYcoord = e.clientY - wallCoords.top
    - wall.clientTop - spider.offsetHeight / 2;

  if (spiderXcoord < 0) {
    spiderXcoord = 0;
  }

  if (spiderYcoord < 0) {
    spiderYcoord = 0;
  }

  if (spiderXcoord + spider.clientWidth > wall.clientWidth) {
    spiderXcoord = wall.clientWidth - spider.clientWidth;
  }

  if (spiderYcoord + spider.clientHeight > wall.clientHeight) {
    spiderYcoord = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderXcoord}px`;
  spider.style.top = `${spiderYcoord}px`;
});
