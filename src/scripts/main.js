'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const widthSpider = spider.offsetWidth;
  const heightSpider = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const maxLeft = wallWidth - widthSpider;
  const rawLeft =
    e.clientX - wall.getBoundingClientRect().left - widthSpider / 2;
  const finalLeft = Math.max(0, Math.min(maxLeft, rawLeft));
  const maxTop = wallHeight - heightSpider;
  const rawTop =
    e.clientY - wall.getBoundingClientRect().top - heightSpider / 2;
  const finalTop = Math.max(0, Math.min(maxTop, rawTop));

  spider.style.left = `${finalLeft}px`;
  spider.style.top = `${finalTop}px`;
});
