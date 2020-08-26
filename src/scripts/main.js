'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;
  const wallSides = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');
  const spiderHeight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;

  let spiderX = event.clientX - wallSides.left
  - wall.clientLeft - spiderWidth / 2;

  let spiderY = event.clientY - wallSides.top
  - wall.clientTop - spiderHeight / 2;

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderX > wallWidth - wall.clientLeft - spiderWidth) {
    spiderX = wallWidth - spiderWidth;
  }

  if (spiderY > wallHeight - wall.clientTop - spiderHeight) {
    spiderY = wallHeight - spiderHeight;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
