'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const spiderX = mouseX - wallRect.left - spiderWidth / 2;
  const spiderY = mouseY - wallRect.top - spiderHeight / 2;

  if (spiderX >= 0 && spiderX + spiderWidth <= wallRect.width) {
    spider.style.left = spiderX + 'px';
  }

  if (spiderY >= 0 && spiderY + spiderHeight <= wallRect.height) {
    spider.style.top = spiderY + 'px';
  }
});
