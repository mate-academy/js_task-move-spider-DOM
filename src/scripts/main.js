'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  let coordX = e.offsetX;
  let coordY = e.offsetY;

  const spiderWidth = spider.width;
  const spiderHeight = spider.height;

  coordX = Math.max(
    spiderWidth / 2,
    Math.min(coordX, wall.clientWidth - spiderWidth / 2),
  );

  coordY = Math.max(
    spiderHeight / 2,
    Math.min(coordY, wall.clientHeight - spiderHeight / 2),
  );

  spider.style.left = coordX - spiderWidth / 2 + 'px';
  spider.style.top = coordY - spiderHeight / 2 + 'px';
});
