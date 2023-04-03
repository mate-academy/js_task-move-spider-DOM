'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  e.preventDefault();

  if (!e.target.classList.contains('wall')) {
    return false;
  }

  const spiderWidth = spider.clientWidth;
  const maxTop = wall.clientHeight - spiderWidth;
  const maxLeft = wall.clientWidth - spiderWidth;

  let spiderTop = e.offsetY - spiderWidth / 2;
  let spiderLeft = e.offsetX - spiderWidth / 2;

  if (spiderTop > maxTop) {
    spiderTop = maxTop;
  }

  if (spiderLeft > maxLeft) {
    spiderLeft = maxLeft;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
});
