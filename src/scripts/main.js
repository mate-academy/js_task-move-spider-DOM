'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallCoord = wall.getBoundingClientRect();

wall.addEventListener('click', (e) => {
  let spiderTop =
    e.clientY - wallCoord.top - wall.clientTop - spider.clientHeight / 2;
  let spiderLeft =
    e.clientX - wallCoord.left - wall.clientLeft - spider.clientWidth / 2;

  spiderTop = Math.max(
    0,
    Math.min(spiderTop, wall.clientHeight - spider.clientHeight),
  );

  spiderLeft = Math.max(
    0,
    Math.min(spiderLeft, wall.clientWidth - spider.clientWidth),
  );

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
});
