'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  let spiderX = e.offsetX - spiderWidth / 2;
  let spiderY = e.offsetY - spiderHeight / 2;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderX > wallWidth - spiderWidth) {
    spiderX = wallWidth - spiderWidth;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderY > wallHeight - spiderHeight) {
    spiderY = wallHeight - spiderHeight;
  }

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
