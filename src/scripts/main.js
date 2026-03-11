'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  spider.style.position = 'absolute';

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  // eslint-disable-next-line no-shadow
  const parent = spider.parentElement;
  const parentRect = parent.getBoundingClientRect();

  let targetLeft = e.clientX - spiderRect.width / 2;
  let targetTop = e.clientY - spiderRect.height / 2;

  targetLeft = Math.max(targetLeft, wallRect.left);
  targetLeft = Math.min(targetLeft, wallRect.right - spiderRect.width);

  targetTop = Math.max(targetTop, wallRect.top);
  targetTop = Math.min(targetTop, wallRect.bottom - spiderRect.height);

  const targetLeftRelative = targetLeft - parentRect.left;
  const targetTopRelative = targetTop - parentRect.top;

  spider.style.left = targetLeftRelative + 'px';
  spider.style.top = targetTopRelative + 'px';
});
