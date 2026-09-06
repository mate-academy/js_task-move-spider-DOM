'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  if (e.target.className !== 'wall') {
    return;
  }

  const maxPossibleWidth = wall.clientWidth - spider.clientWidth;
  const maxPossibleHeight = wall.clientHeight - spider.clientHeight;

  const focusY = e.offsetY - spider.clientHeight / 2;
  const focusX = e.offsetX - spider.clientWidth / 2;

  const positionY = Math.max(Math.min(focusY, maxPossibleHeight), 0);
  const positionX = Math.max(Math.min(focusX, maxPossibleWidth), 0);

  spider.style.top = `${positionY}px`;
  spider.style.left = `${positionX}px`;
});
