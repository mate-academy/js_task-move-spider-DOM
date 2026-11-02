'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target) && e.target !== wall) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();

  const left =
    e.clientX - wallCoords.left - wall.clientLeft - spider.offsetWidth / 2;

  const spiderTop =
    e.clientY - wallCoords.top - wall.clientTop - spider.offsetHeight / 2;

  const minLeft = 0;
  const minTop = 0;
  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const boundedLeft = Math.max(minLeft, Math.min(left, maxLeft));
  const boundedTop = Math.max(minTop, Math.min(spiderTop, maxTop));

  spider.style.left = `${boundedLeft}px`;
  spider.style.top = `${boundedTop}px`;
});
