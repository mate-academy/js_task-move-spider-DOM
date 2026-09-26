'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';

spider.style.position = 'absolute';

const spiderWidthSet = spider.offsetWidth;
const spiderHeightSet = spider.offsetHeight;

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const maxTop = wall.clientHeight - spiderHeightSet;
  const maxLeft = wall.clientWidth - spiderWidthSet;

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  const topPosition =
    e.clientY - wallRect.top - borderTop - spiderHeightSet / 2;
  const leftPosition =
    e.clientX - wallRect.left - borderLeft - spiderWidthSet / 2;

  const clampedTop = Math.min(Math.max(0, topPosition), maxTop);
  const clampedLeft = Math.min(Math.max(0, leftPosition), maxLeft);

  spider.style.top = `${clampedTop}px`;
  spider.style.left = `${clampedLeft}px`;
});
