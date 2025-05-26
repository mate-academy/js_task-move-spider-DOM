'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider || !wall.contains(e.target)) {
    return;
  }

  const wallParams = wall.getBoundingClientRect();
  let spiderLeft =
    e.clientX - wallParams.left - wall.clientLeft - spider.offsetWidth / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  const maxLeftPosition = wall.clientWidth - spider.offsetWidth;

  if (spiderLeft > maxLeftPosition) {
    spiderLeft = maxLeftPosition;
  }

  let spiderTop =
    e.clientY - wallParams.top - wall.clientTop - spider.offsetHeight / 2;

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  const maxTopPosition = wall.clientHeight - spider.offsetHeight;

  if (spiderTop > maxTopPosition) {
    spiderTop = maxTopPosition;
  }
  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
