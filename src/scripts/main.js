'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const x = e.clientX - wallRect.left - wall.clientLeft;
  const y = e.clientY - wallRect.top - wall.clientTop;

  const leftCoord = Math.min(
    Math.max(x - spiderWidth / 2, 0),
    wall.clientWidth - spiderWidth,
  );
  const topCoord = Math.min(
    Math.max(y - spiderHeight / 2, 0),
    wall.clientHeight - spiderHeight,
  );

  spider.style.left = `${leftCoord}px`;
  spider.style.top = `${topCoord}px`;
});
