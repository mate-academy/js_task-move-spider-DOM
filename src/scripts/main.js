'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallBorder = 0;

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let spiderLeft = x - wallRect.x - wallBorder - spider.offsetWidth / 2;
  let spiderTop = y - wallRect.y - wallBorder - spider.offsetHeight / 2;

  spiderLeft = Math.max(
    0,
    Math.min(wallRect.width - spiderRect.width, spiderLeft),
  );

  spiderTop = Math.max(
    0,
    Math.min(wallRect.height - spiderRect.height, spiderTop),
  );

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
