'use strict';

const spidy = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  let clientX = e.offsetX - spidy.clientWidth / 2;
  let clientY = e.offsetY - spidy.clientHeight / 2;

  const maxX = wall.clientWidth - spidy.clientWidth;
  const maxY = wall.clientHeight - spidy.clientHeight;
  const minX = 0;
  const minY = 0;

  clientX = Math.max(minX, Math.min(maxX, clientX));
  clientY = Math.max(minY, Math.min(maxY, clientY));

  spidy.style.left = `${clientX}px`;
  spidy.style.top = `${clientY}px`;
});
