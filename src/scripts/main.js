'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const borderRight = wall.clientWidth - spider.clientWidth;
  const borderBottom = wall.clientHeight - spider.clientHeight;

  if (!e.target.closest('.wall')) {
    return;
  }

  let mouseY = e.clientY - wall.offsetTop - wall.clientTop - spider.height / 2;
  let mouseX = e.clientX - wall.offsetLeft - wall.clientLeft - spider.width / 2;

  if (mouseX > borderRight) {
    mouseX = borderRight;
  }

  if (mouseX < 0) {
    mouseX = 0;
  }

  if (mouseY > borderBottom) {
    mouseY = borderBottom;
  }

  if (mouseY < 0) {
    mouseY = 0;
  }

  spider.style.left = `${mouseX}px`;
  spider.style.top = `${mouseY}px`;
});
