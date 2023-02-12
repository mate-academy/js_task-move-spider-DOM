'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallCoords = wall.getBoundingClientRect();

  if (e.clientY < wallCoords.top || e.clientY > wallCoords.bottom) {
    return;
  }

  if (e.clientX < wallCoords.left || e.clientX > wallCoords.right) {
    return;
  }

  let spiderTop = (e.clientY - wallCoords.top - spider.clientHeight / 2
    - wall.clientTop);

  spiderTop = spiderTop < 0 ? 0 : spiderTop;

  if (spiderTop > wall.clientHeight - spider.clientHeight) {
    spiderTop = wall.clientHeight - spider.clientHeight;
  }

  let spiderLeft = (e.clientX - wallCoords.left - spider.clientWidth / 2
  - wall.clientLeft);

  if (spiderLeft > wall.clientWidth - spider.clientWidth) {
    spiderLeft = wall.clientWidth - spider.clientWidth;
  }

  spiderLeft = spiderLeft < 0 ? 0 : spiderLeft;

  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
});
