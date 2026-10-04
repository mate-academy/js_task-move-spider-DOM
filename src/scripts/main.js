'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const rect = wall.getBoundingClientRect();

  let spiderLeft =
    e.clientX - rect.left - wall.clientLeft - spider.offsetWidth / 2;
  let spiderTop =
    e.clientY - rect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderLeft > maxLeft) {
    spiderLeft = maxLeft;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderTop > maxTop) {
    spiderTop = maxTop;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
