'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const spiderHalfWidth = spider.clientWidth / 2;
  const spiderHalfHeight = spider.clientHeight / 2;

  let spiderLeft = e.offsetX - spiderHalfWidth;
  let spiderTop = e.offsetY - spiderHalfHeight;

  if (e.offsetX < spiderHalfWidth) {
    spiderLeft = 0;
  }

  if (e.offsetY < spiderHalfHeight) {
    spiderTop = 0;
  }

  if (e.offsetX > wall.clientWidth - spiderHalfWidth) {
    spiderLeft = wall.clientWidth - spider.clientWidth;
  }

  if (e.offsetY > wall.clientHeight - spiderHalfHeight) {
    spiderTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
});
