'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  let newLeft = e.offsetX - spiderHalfWidth;
  let newTop = e.offsetY - spiderHalfHeight;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
