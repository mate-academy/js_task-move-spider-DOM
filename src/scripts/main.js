'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  let spiderLeft = clickX - spiderWidth / 2;
  let spiderTop = clickY - spiderHeight / 2;

  const maxLeft = wallWidth - spiderWidth;
  const maxTop = wallHeight - spiderHeight;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  } else if (spiderLeft > maxLeft) {
    spiderLeft = maxLeft;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  } else if (spiderTop > maxTop) {
    spiderTop = maxTop;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
