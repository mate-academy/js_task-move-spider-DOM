'use strict';

document.addEventListener('click', (e) => {
  // write code here

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRectangle = wall.getBoundingClientRect();

  let x = e.clientX - wallRectangle.left - spider.width + spider.width / 2;

  let y = e.clientY - wallRectangle.top - spider.height + spider.height / 2;

  if (e.clientX <= wallRectangle.left + spider.width / 2) {
    x = 0;
  } else if (
    e.clientX >=
    wallRectangle.left + wallRectangle.width - spider.width
  ) {
    x = wallRectangle.width - spider.width - spider.width / 2;
  }

  if (e.clientY <= wallRectangle.top + spider.height / 2) {
    y = 0;
  } else if (
    e.clientY >=
    wallRectangle.top + wallRectangle.height - spider.height
  ) {
    y = wallRectangle.height - spider.height - spider.height / 2;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
