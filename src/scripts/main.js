'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newLeft = e.clientX - wallRect.left - spiderWidth / 2;
  let newTop = e.clientY - wallRect.top - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderHeight));

  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
