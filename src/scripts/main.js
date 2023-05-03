'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallTop = wall.offsetTop + wall.clientTop;
const wallLeft = wall.offsetLeft + wall.clientLeft;

const spiderHalfWidth = parseFloat(getComputedStyle(spider).width) / 2;
const spiderHalfHeight = parseFloat(getComputedStyle(spider).height) / 2;

document.addEventListener('click', e => {
  const x = e.clientX;
  const y = e.clientY;

  if (e.target !== document.querySelector('.wall')) {
    return false;
  }

  switch (true) {
    case (x < wallLeft + spiderHalfWidth):
      spider.style.left = 0 + 'px';
      break;

    case (x > wallLeft + wall.clientWidth - spiderHalfWidth):
      spider.style.left = wall.clientWidth - spiderHalfWidth * 2 + 'px';
      break;

    default:
      spider.style.left = (x - wallLeft - spiderHalfWidth) + 'px';

      break;
  }

  switch (true) {
    case (y < wallTop + spiderHalfWidth):
      spider.style.top = 0 + 'px';
      break;

    case (y > wallTop + wall.clientHeight - spiderHalfWidth):
      spider.style.top = wall.clientHeight - spiderHalfWidth * 2 + 'px';
      break;

    default:
      spider.style.top = (y - wallTop - spiderHalfHeight) + 'px';

      break;
  }
});
