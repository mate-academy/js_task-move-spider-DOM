'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let left = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  left = Math.max(0, Math.min(left, wall.clientWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${newTop}px`;
});
