'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!wall) {
    return;
  }

  const wallTop = wall.offsetTop;
  const wallLeft = wall.offsetLeft;

  const clickX = e.clientX - (wallLeft + spider.offsetWidth / 2);
  const clickY = e.clientY - (wallTop + spider.offsetHeight / 2);

  const widthBorder = 20;

  const maxX = wall.offsetWidth - spider.offsetWidth - widthBorder;
  const maxY = wall.offsetHeight - spider.offsetHeight - widthBorder;

  const validX = Math.min(Math.max(clickX, 0), maxX);
  const validY = Math.min(Math.max(clickY, 0), maxY);

  spider.style.left = `${validX}px`;
  spider.style.top = `${validY}px`;
});
