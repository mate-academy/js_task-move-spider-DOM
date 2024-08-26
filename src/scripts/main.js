'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallBorder = parseInt(getComputedStyle(wall).border);
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let spiderLeft = e.clientX - wallRect.x - wallBorder - spider.offsetWidth / 2;
  let spiderTop = e.clientY - wallRect.y - wallBorder - spider.offsetHeight / 2;

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
