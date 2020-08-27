'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let spiderTop = e.clientY
    - wall.offsetTop
    - wall.clientTop
    - spiderHeight / 2;

  let spiderLeft = e.clientX
    - wall.offsetLeft
    - wall.clientLeft
    - spiderWidth / 2;

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop > wallHeight - spiderHeight) {
    spiderTop = wallHeight - spiderHeight;
  }

  if (spiderLeft > wallWidth - spiderWidth) {
    spiderLeft = wallWidth - spiderWidth;
  }

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
