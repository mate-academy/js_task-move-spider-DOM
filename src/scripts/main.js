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
  const NotAvailableXLeft = e.clientX < notWallX + borderLeft;
  const NotAvailableXRight = e.clientX > notWallX + borderLeft + wallWidth;
  const NotAvailableYTop = e.clientY < notWallY + borderTop;
  const NotAvailableXBottom = e.clientY > notWallY + borderTop + wallHeight;

  if (
    NotAvailableXLeft ||
    NotAvailableXRight ||
    NotAvailableYTop ||
    NotAvailableXBottom
  ) {
    return;
  }

  const newLeft = e.clientX - notWallX - borderLeft - spider.offsetWidth / 2;
  const newTop = e.clientY - notWallY - borderTop - spider.offsetHeight / 2;

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
