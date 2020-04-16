'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spider = wall.querySelector('.spider');
  const position = wall.getBoundingClientRect();
  const positionX = position.left + wall.clientLeft;
  const positionY = position.top + wall.clientTop;
  let x = e.clientX - positionX - spider.offsetWidth / 2;
  let y = e.clientY - positionY - spider.offsetHeight / 2;
  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  if (x < 0) {
    x = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
