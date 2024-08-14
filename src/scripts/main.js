'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const newLeft = Math.max(
    0,
    Math.min(x - spiderWidth / 2, wallWidth - spiderWidth),
  );
  const newTop = Math.max(
    0,
    Math.min(y - spiderHeight / 2, wallHeight - spiderHeight),
  );

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
