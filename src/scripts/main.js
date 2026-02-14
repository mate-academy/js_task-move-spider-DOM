'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const spiderHeight = spider.clientHeight;
  const spiderWidht = spider.clientWidth;

  if (!e.target.closest('.wall')) {
    return;
  }

  const requiredTop =
    e.clientY - wall.offsetTop - wall.clientTop - spiderHeight / 2;
  const requiredLeft =
    e.clientX - wall.offsetLeft - wall.clientLeft - spiderWidht / 2;

  const finalTop = Math.max(
    0,
    Math.min(wall.clientHeight - spiderHeight, requiredTop),
  );
  const finalLeft = Math.max(
    0,
    Math.min(wall.clientWidth - spiderWidht, requiredLeft),
  );

  spider.style.top = `${finalTop}px`;
  spider.style.left = `${finalLeft}px`;
});
