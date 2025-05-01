'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  let newLeft = e.offsetX - spiderHalfWidth;
  let newTop = e.offsetY - spiderHalfHeight;

  newLeft = Math.max(
    0,
    Math.min(newLeft, wall.clientWidth - spider.offsetWidth),
  );

  newTop = Math.max(
    0,
    Math.min(newTop, wall.clientHeight - spider.offsetHeight),
  );

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
