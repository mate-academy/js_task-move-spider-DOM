'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderWidht = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const requiredTop =
    e.clientY - wallRect.top - spiderHeight / 2;
  const requiredLeft =
    e.clientX - wallRect.left - spiderWidht / 2;

  const finalTop = Math.max(
    0,
    Math.min(wallRect.height - spiderHeight, requiredTop),
  );
  const finalLeft = Math.max(
    0,
    Math.min(wallRect.width - spiderWidht, requiredLeft),
  );

  spider.style.top = `${finalTop}px`;
  spider.style.left = `${finalLeft}px`;
});
