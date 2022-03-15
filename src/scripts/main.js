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
  - parseFloat(spider.offsetWidth) / 2);

  let movementY = (e.clientY - initialY
  - parseFloat(spider.offsetHeight) / 2);

  if (movementX > (wall.offsetWidth - spider.offsetWidth
    - wall.style.borderWidth)) {
    movementX = wall.offsetWidth - spider.offsetWidth - wall.style.borderWidth;
  }

  if (movementX < 0) {
    movementX = 0;
  }

  if (movementY > (wall.offsetHeight - spider.offsetHeight)) {
    movementY = wall.offsetHeight - spider.offsetHeight;
  }

  if (movementY < 0) {
    movementY = 0;
  }

  spider.style.left = movementX + 'px';

  spider.style.top = movementY + 'px';
});
