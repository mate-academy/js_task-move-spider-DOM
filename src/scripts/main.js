'use strict';

document.addEventListener('click', e => {
  const targetWall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!targetWall) {
    return;
  }

  let spiderLeft = e.clientX - targetWall.getBoundingClientRect().left
    - targetWall.clientLeft - spider.offsetWidth / 2;
  let spiderTop = e.clientY - targetWall.getBoundingClientRect().top
    - targetWall.clientTop - spider.offsetHeight / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft + spider.offsetWidth > targetWall.clientWidth) {
    spiderLeft = targetWall.clientWidth - spider.offsetWidth;
  }

  if (spiderTop + spider.offsetHeight > targetWall.clientHeight) {
    spiderTop = targetWall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
});
