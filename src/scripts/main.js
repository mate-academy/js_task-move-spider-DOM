'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const posiiton = wall.getBoundingClientRect();
  const positionX = posiiton.x + wall.clientLeft;
  const positionY = posiiton.y + wall.clientTop;
  let x = e.clientX - positionX - spider.offsetWidth / 2;
  let y = e.clientY - positionY - spider.offsetHeight / 2;
  const MaxX = wall.clientWidth - spider.offsetWidth;
  const MaxY = wall.clientHeight - spider.offsetHeight;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > MaxX) {
    x = MaxX;
  }

  if (y > MaxY) {
    y = MaxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
