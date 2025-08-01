'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  let pageLeft = e.clientX - wallRect.left - spiderHalfWidth;
  let pageTop = e.clientY - wallRect.top - spiderHalfHeight;

  pageLeft = Math.max(
    0,
    Math.min(pageLeft, wall.clientWidth - spider.offsetWidth),
  );

  pageTop = Math.max(
    0,
    Math.min(pageTop, wall.clientHeight - spider.offsetHeight),
  );

  spider.style.position = 'absolute';
  spider.style.left = `${pageLeft}px`;
  spider.style.top = `${pageTop}px`;
});
