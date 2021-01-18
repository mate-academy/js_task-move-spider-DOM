'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  const border = wall.clientLeft;
  const spiderInfo = spider.getBoundingClientRect();
  const wallInfo = wall.getBoundingClientRect();
  const centerHeight = spiderInfo.height / 2;
  const centerWidth = spiderInfo.width / 2;

  const wallTop = wallInfo.top + window.pageYOffset + border + centerHeight;
  const wallLeft = wallInfo.left + window.pageXOffset + border + centerWidth;

  let spiderLeft = e.clientX - wallLeft;
  let spiderTop = e.clientY - wallTop;
  const wallHeight = wallInfo.height - 2 * border - spiderInfo.height;
  const wallWidth = wallInfo.width - 2 * border - spiderInfo.width;

  spiderTop = (spiderTop < 0)
    ? 0
    : (spiderTop > wallHeight)
      ? wallHeight
      : spiderTop;

  spiderLeft = (spiderLeft < 0)
    ? 0
    : (spiderLeft > wallWidth)
      ? wallWidth
      : spiderLeft;

  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
});
