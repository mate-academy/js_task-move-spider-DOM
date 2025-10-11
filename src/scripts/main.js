'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.style.position = 'relative';
spider.style.position = 'absolute';

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const rect = wall.getBoundingClientRect();
  const localX = e.clientX - rect.left;
  const localY = e.clientY - rect.top;

  let newLeft = localX - spiderWidth / 2;
  let newTop = localY - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, rect.width - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, rect.height - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
