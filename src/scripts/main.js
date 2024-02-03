'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.getElementsByClassName('wall')[0];
  const wallH = wall.clientHeight;
  const wallW = wall.clientWidth;
  const spiderH = spider.offsetHeight;
  const spiderW = spider.offsetWidth;

  if (e.target.classList.value === 'wall') {
    if (e.offsetY + spiderH / 2 > wallH) {
      spider.style.top = (wallH - spiderH) + 'px';
    } else if (e.offsetY - spiderH / 2 <= 0) {
      spider.style.top = '0px';
    } else {
      spider.style.top = (e.offsetY - spiderH / 2) + 'px';
    }

    if (e.offsetX + spiderW / 2 > wallW) {
      spider.style.left = (wallW - spiderW) + 'px';
    } else if (e.offsetX - spiderW / 2 <= 0) {
      spider.style.left = '0px';
    } else {
      spider.style.left = (e.offsetX - spiderW / 2) + 'px';
    }
  }
});
