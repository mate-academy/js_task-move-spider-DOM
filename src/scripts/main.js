'use strict';

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return false;
  }

  const wall = document.querySelector('.wall');
  const wallTop = wall.offsetTop + wall.clientTop;
  const wallLeft = wall.offsetLeft + wall.clientLeft;
  const wallBottom = wallTop + wall.clientHeight;
  const wallRight = wallLeft + wall.clientWidth;

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let spiderNewTop = e.clientY - wallTop - spiderHeight / 2;
  let spiderNewLeft = e.clientX - wallLeft - spiderWidth / 2;

  if (e.clientY - wallTop < spiderHeight / 2) {
    spiderNewTop = 0;
  }

  if (e.clientX - wallLeft < spiderWidth / 2) {
    spiderNewLeft = 0;
  }

  if (e.clientX + spiderWidth / 2 > wallRight) {
    spiderNewLeft = wall.clientWidth - spiderWidth;
  }

  if (e.clientY + spiderHeight / 2 > wallBottom) {
    spiderNewTop = wall.clientHeight - spiderHeight;
  }

  spider.style.top = spiderNewTop + 'px';
  spider.style.left = spiderNewLeft + 'px';
});
