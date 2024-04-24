/* eslint-disable no-shadow */
'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', function (event) {
  const clickX = event.clientX - wall.offsetLeft;
  const clickY = event.clientY - wall.offsetTop;

  const spiderX = clickX - spider.offsetWidth / 2;
  const spiderY = clickY - spider.offsetHeight / 2;

  if (
    spiderX >= 0 &&
    spiderY >= 0 &&
    spiderX + spider.offsetWidth <= wall.offsetWidth &&
    spiderY + spider.offsetHeight <= wall.offsetHeight
  ) {
    spider.style.left = spiderX + 'px';
    spider.style.top = spiderY + 'px';
  }
});
