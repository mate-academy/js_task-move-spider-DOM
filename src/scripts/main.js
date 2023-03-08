'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const maxY = wall.clientHeight - spider.clientHeight;
  const maxX = wall.clientWidth - spider.clientWidth;
  let spiderTop = e.clientY - spider.offsetHeight / 2
  - e.target.offsetTop - e.target.clientTop;
  let spiderLeft = e.clientX - spider.offsetWidth / 2
  - e.target.offsetLeft - e.target.clientLeft;

  if (e.target.className !== 'wall') {
    return;
  }

  if (spiderTop > maxY) {
    spiderTop = maxY;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft > maxX) {
    spiderLeft = maxX;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
