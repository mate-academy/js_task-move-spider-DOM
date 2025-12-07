'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  const clickTop = e.clientY - rect.top;
  const clickLeft = e.clientX - rect.left;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const halfWidth = spiderWidth / 2;
  const halfHeight = spiderHeight / 2;

  const wallWidth = rect.width;
  const wallHeight = rect.height;

  let newTop = clickTop - halfHeight;
  let newLeft = clickLeft - halfWidth;

  const maxTop = Math.max(0, wallHeight - spiderHeight);
  const maxLeft = Math.max(0, wallWidth - spiderWidth);

  // обмеження
  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > maxTop) {
    newTop = maxTop;
  }

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > maxLeft) {
    newLeft = maxLeft;
  }

  spider.style.top = newTop + 'px';
  spider.style.left = newLeft + 'px';
});
