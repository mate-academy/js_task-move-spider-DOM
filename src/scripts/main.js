'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const clickX = e.clientX;
  const clickY = e.clientY;

  if (
    clickX >= wallRect.left &&
    clickX <= wallRect.right &&
    clickY >= wallRect.top &&
    clickY <= wallRect.bottom
  ) {
    spider.style.left = `${clickX - wallRect.left - spiderWidth / 2}px`;
    spider.style.top = `${clickY - wallRect.top - spiderHeight / 2}px`;
  }
});
