'use strict';

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!wall) {
    return;
  }

  const wallWidth = parseFloat(getComputedStyle(wall).width);
  const wallHeight = parseFloat(getComputedStyle(wall).height);
  let spiderTop;
  let spiderLeft;

  if (e.offsetY < 0) {
    spiderTop = 0;
  } else if (e.offsetY < (wallHeight - (spider.offsetHeight / 2))) {
    spiderTop = (e.offsetY - (spider.offsetHeight / 2)) >= 0
      ? (e.offsetY - (spider.offsetHeight / 2))
      : 0;
  } else {
    spiderTop = wallHeight - spider.offsetHeight;
  }

  if (e.offsetX < 0) {
    spiderLeft = 0;
  } else if (e.offsetX < (wallWidth - (spider.offsetWidth / 2))) {
    spiderLeft = (e.offsetX - (spider.offsetWidth / 2)) >= 0
      ? (e.offsetX - (spider.offsetWidth / 2))
      : 0;
  } else {
    spiderLeft = wallWidth - spider.offsetWidth;
  }

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
