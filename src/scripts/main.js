'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const x = e.clientX - wall.getBoundingClientRect().left - wall.clientLeft;
  const y = e.clientY - wall.getBoundingClientRect().top - wall.clientTop;

  const left = Math.max(
    0,
    Math.min(x - spiderWidth / 2, wall.clientWidth - spiderWidth),
  );

  const topPosition = Math.max(
    0,
    Math.min(y - spiderHeight / 2, wall.clientHeight - spiderHeight),
  );

  spider.style.left = `${left}px`;
  spider.style.top = `${topPosition}px`;
});
