'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  let x = e.offsetX;
  let y = e.offsetY;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (x < spiderWidth / 2) {
    x = spiderWidth / 2;
  } else if (x > wall.clientWidth - spiderWidth / 2) {
    x = wall.clientWidth - spiderWidth / 2;
  }

  if (y < spiderHeight / 2) {
    y = spiderHeight / 2;
  } else if (y > wall.clientHeight - spiderHeight / 2) {
    y = wall.clientHeight - spiderHeight / 2;
  }

  spider.style.left = x - spiderWidth / 2 + 'px';
  spider.style.top = y - spiderHeight / 2 + 'px';
});
