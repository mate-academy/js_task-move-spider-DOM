'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const x = e.offsetX;
  const y = e.offsetY;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let spiderX = x - (spiderWidth / 2);
  let spiderY = y - (spiderHeight / 2);

  const wallWidth = wall.clientWidth - spiderWidth;
  const wallHeight = wall.clientHeight - spiderHeight;

  if (spiderY > wallHeight) {
    spiderY = wallHeight;
  }

  if (spiderX > wallWidth) {
    spiderX = wallWidth;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  spider.style.top = spiderY + 'px';
  spider.style.left = spiderX + 'px';
});
