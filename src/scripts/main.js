'use strict';

const walls = document.querySelector('.wall');
const pavyk = document.querySelector('.spider');

walls.addEventListener('click', (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;

  const spiderW = pavyk.offsetWidth / 2;
  const spiderH = pavyk.offsetHeight / 2;

  const wallRect = walls.getBoundingClientRect();

  const relativeX = clickX - wallRect.left;
  const relativeY = clickY - wallRect.top;

  let left = relativeX - spiderW;
  let above = relativeY - spiderH;

  if (left < 0) {
    left = 0;
  }

  if (above < 0) {
    above = 0;
  }

  if (left > wallRect.width - pavyk.offsetWidth) {
    left = wallRect.width - pavyk.offsetWidth;
  }

  if (above > wallRect.height - pavyk.offsetHeight) {
    above = wallRect.height - pavyk.offsetHeight;
  }

  pavyk.style.left = `${left}px`;
  pavyk.style.top = `${above}px`;
});
