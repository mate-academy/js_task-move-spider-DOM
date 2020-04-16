'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (event.target !== wall
    && event.target !== spider) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;
  let newX = event.clientX - wall.getBoundingClientRect().left
  - spiderWidth / 2 - wall.clientLeft;
  let newY = event.clientY - wall.getBoundingClientRect().top
  - spiderHeight / 2 - wall.clientTop;

  if (newX < 0) {
    newX = 0;
  };

  if (newY < 0) {
    newY = 0;
  };

  if (newX > maxX) {
    newX = maxX;
  };

  if (newY > maxY) {
    newY = maxY;
  }

  spider.style.top = `${newY}px`;
  spider.style.left = `${newX}px`;
});
