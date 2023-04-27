'use strict';

document.addEventListener('click', e => {
  const spiderElement = document.querySelector('.spider');
  const wallElement = document.querySelector('.wall');

  if (!wallElement.contains(e.target)) {
    return;
  };

  const halfX = spiderElement.getBoundingClientRect().width / 2;
  const halfY = spiderElement.getBoundingClientRect().height / 2;

  let xPosition = e.clientX - wallElement.offsetLeft
    - wallElement.clientLeft - halfX;
  let yPosition = e.clientY - wallElement.offsetTop
    - wallElement.clientTop - halfY;

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (xPosition > wallElement.clientWidth - halfX * 2) {
    xPosition = wallElement.clientWidth - halfX * 2;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  if (yPosition > wallElement.clientHeight - halfY * 2) {
    yPosition = wallElement.clientHeight - halfY * 2;
  }

  spiderElement.setAttribute(
    'style', `transform: translate3d(${xPosition}px, ${yPosition}px, 0);`
  );
});
