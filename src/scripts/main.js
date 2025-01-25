'use strict';

document.addEventListener('click', (e) => {
  const walls = e.target.closest('.wall');

  if (!walls) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spiderMan = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spiderMan.getBoundingClientRect();
  const borderSize = 10;

  let coordsX = e.clientX - wallRect.left - spiderRect.width / 2;
  let coordsY = e.clientY - wallRect.top - spiderRect.height / 2;

  if (coordsX < 0) {
    coordsX = 0;
  }

  if (coordsY < 0) {
    coordsY = 0;
  }

  if (coordsX > wallRect.width - spiderRect.width - 2 * borderSize) {
    coordsX = wallRect.width - spiderRect.width - 2 * borderSize;
  }

  if (coordsY > wallRect.height - spiderRect.height - 2 * borderSize) {
    coordsY = wallRect.height - spiderRect.height - 2 * borderSize;
  }

  spiderMan.style.left = `${coordsX}px`;
  spiderMan.style.top = `${coordsY}px`;
});
