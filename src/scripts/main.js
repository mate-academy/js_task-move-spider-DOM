'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let left = e.clientX - wallRect.left - spiderWidth / 2;
  let spiderTop = e.clientY - wallRect.top - spiderHeight / 2;

  left = Math.max(0, Math.min(left, wallRect.width - spiderWidth));

  spiderTop = Math.max(
    0,
    Math.min(spiderTop, wallRect.height - spiderHeight),
  );

  spider.style.left = `${left}px`;
  spider.style.top = `${spiderTop}px`;
});
