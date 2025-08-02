'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  let left = e.clientX - wallRect.left - spiderHalfWidth;
  let top2 = e.clientY - wallRect.top - spiderHalfHeight;

  left = Math.max(0, Math.min(left, wall.clientWidth - spider.offsetWidth));
  top2 = Math.max(0, Math.min(top2, wall.clientHeight - spider.offsetHeight));

  spider.style.top = `${top2}px`;
  spider.style.left = `${left}px`;
});
