'use strict';

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  };

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let spiderTop = e.offsetY;
  let spiderLeft = e.offsetX;

  if (spiderLeft + spider.clientWidth > wall.clientWidth) {
    spiderLeft = wall.clientWidth - spider.clientWidth;
  }

  if (spiderTop + spider.clientHeight > wall.clientHeight) {
    spiderTop = wall.clientHeight - spider.clientHeight;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
