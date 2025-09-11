'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const borderX = (wallRect.width - wall.clientWidth) / 2;
  const borderY = (wallRect.height - wall.clientHeight) / 2;

  const desLeft = e.clientX - wallRect.left - borderX - spiderRect.width / 2;
  const desTop = e.clientY - wallRect.top - borderY - spiderRect.height / 2;

  const clampedLeft = Math.max(
    0,
    Math.min(desLeft, wall.clientWidth - spiderRect.width),
  );
  const clampedTop = Math.max(
    0,
    Math.min(desTop, wall.clientHeight - spiderRect.height),
  );

  spider.style.left = clampedLeft + 'px';
  spider.style.top = clampedTop + 'px';
});
