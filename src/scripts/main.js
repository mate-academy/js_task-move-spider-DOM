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

  x = Math.max(
    spider.width / 2,
    Math.min(x, wall.clientWidth - spiderWidth / 2),
  );

  y = Math.max(
    spider.height / 2,
    Math.min(y, wall.clientHeight - spiderHeight / 2),
  );

  spider.style.left = x - spiderWidth / 2 + 'px';
  spider.style.top = y - spiderHeight / 2 + 'px';
});
