'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('img');
  const notWallX = (window.innerWidth - wall.offsetWidth) / 2;
  const notWallY = (window.innerHeight - wall.offsetHeight) / 2;
  const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth);
  const borderTop = parseInt(getComputedStyle(wall).borderTopWidth);
  const wallWidth = parseInt(getComputedStyle(wall).width);
  const wallHeight = parseInt(getComputedStyle(wall).height);
  let newLeft = e.clientX - notWallX - borderLeft - spider.offsetWidth / 2;
  let newTop = e.clientY - notWallY - borderTop - spider.offsetHeight / 2;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > wallWidth - spider.offsetWidth) {
    newLeft = wallWidth - spider.offsetWidth;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > wallHeight - spider.offsetHeight) {
    newTop = wallHeight - spider.offsetHeight;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
