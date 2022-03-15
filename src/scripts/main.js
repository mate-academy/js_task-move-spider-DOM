'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const initialX = wall.offsetRight;
  const initialY = wall.offsetBottom;

  if (e.target !== wall) {
    return false;
  }

  let movementX = initialX;

  let movementY = initialY;
  /* (e.clientY - initialY
  - parseFloat(spider.offsetHeight) / 2); */

  if (movementX > (wall.offsetWidth - spider.offsetWidth)) {
    movementX = wall.offsetWidth - wall.style.borderWidth / 2
    - spider.offsetWidth;
  }

  if (movementY > (wall.offsetHeight - spider.offsetHeight)) {
    movementY = wall.offsetHeight - wall.style.borderWidth / 2
    - spider.offsetHeight;
  }

  spider.style.left = movementX + 'px';

  spider.style.top = movementY + 'px';
});
