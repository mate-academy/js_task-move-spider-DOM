'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const initialX = wall.offsetLeft;
  const initialY = wall.offsetTop;

  if (e.target !== wall) {
    return false;
  }

  let movementX = (e.clientX - initialX
  - spider.offsetWidth / 2);

  let movementY = (e.clientY - initialY
  - spider.offsetHeight / 2);

  const maxX = wall.offsetWidth - spider.offsetWidth
  - parseFloat(wall.style.borderWidth);

  if (movementX > maxX) {
    movementX = maxX;
  }

  if (movementX < 0) {
    movementX = 0;
  }

  const maxY = (wall.offsetHeight - spider.offsetHeight
  - parseFloat(wall.style.borderWidth));

  if (movementY > maxY) {
    movementY = maxY;
  }

  if (movementY < 0) {
    movementY = 0;
  }

  spider.style.left = movementX + 'px';

  spider.style.top = movementY + 'px';
});
