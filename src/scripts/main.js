'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const offsetX = e.clientX - wallRect.left;
  const offsetY = e.clientY - wallRect.top;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const clampedLeft = Math.min(
    Math.max(0, offsetX - spiderWidth / 2),
    wall.clientWidth - spiderWidth,
  );

  const clampedTop = Math.min(
    Math.max(0, offsetY - spiderHeight / 2),
    wall.clientHeight - spiderHeight,
  );

  spider.style.left = `${clampedLeft}px`;
  spider.style.top = `${clampedTop}px`;
});
