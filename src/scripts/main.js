'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!wall.contains(e.target)) {
    return;
  }

  let x = e.offsetX;
  let y = e.offsetY;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (x < spiderWidth / 2) {
    x = spiderWidth / 2;
  }

  if (x > wall.clientWidth - spiderWidth / 2) {
    x = wall.clientWidth - spiderWidth / 2;
  }

  if (y < spiderHeight / 2) {
    y = spiderHeight / 2;
  }

  if (y > wall.clientHeight - spiderHeight / 2) {
    y = wall.clientHeight - spiderHeight / 2;
  }

  const newLeft = x - spiderWidth / 2;
  const newTop = y - spiderHeight / 2;

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
