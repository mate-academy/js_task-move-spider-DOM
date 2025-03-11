'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderHalfWidth = spiderRect.width / 2;
  const spiderHalfHeight = spiderRect.height / 2;

  let newLeft = e.clientX - wallRect.left - spiderHalfWidth;
  let newTop = e.clientY - wallRect.top - spiderHalfHeight;

  newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderRect.width));
  newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderRect.height));

  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
