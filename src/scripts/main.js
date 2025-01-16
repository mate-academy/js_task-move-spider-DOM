'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const wallTop = wall.offsetTop;
  const wallLeft = wall.offsetLeft;
  const border = parseInt(getComputedStyle(wall).borderWidth);

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth / 2;
  const spiderHeight = spider.offsetHeight / 2;

  if (
    e.clientX < wallLeft ||
    e.clientY < wallTop ||
    e.clientX > wallLeft + wall.offsetWidth ||
    e.clientY > wallTop + wall.offsetHeight
  ) {
    return;
  }

  spider.style.left = e.clientX - wallLeft - spiderWidth - border + 'px';
  spider.style.top = e.clientY - wallTop - spiderHeight - border + 'px';

  if (e.clientX < wallLeft + border + spiderWidth) {
    spider.style.left = 0 + 'px';
  }

  if (e.clientY < wallTop + border + spiderHeight) {
    spider.style.top = 0 + 'px';
  }

  if (e.clientX > wallLeft + border + wall.clientWidth - spiderWidth) {
    spider.style.left = wall.clientWidth - spider.width + 'px';
  }

  if (e.clientY > wallTop + border + wall.clientHeight - spiderHeight) {
    spider.style.top = wall.clientHeight - spider.height + 'px';
  }
});
