'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('img');

  const rect = wall.getBoundingClientRect();
  const wallLeft = rect.left + scrollX;
  const wallTop = rect.top + scrollY;
  const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth);
  const borderTop = parseInt(getComputedStyle(wall).borderTopWidth);
  const wallWidth = parseInt(getComputedStyle(wall).width);
  const wallHeight = parseInt(getComputedStyle(wall).height);
  const NotAvailableXLeft = e.clientX < wallLeft + borderLeft;
  const NotAvailableXRight = e.clientX > wallLeft + borderLeft + wallWidth;
  const NotAvailableYTop = e.clientY < wallTop + borderTop;
  const NotAvailableYBottom = e.clientY > wallTop + borderTop + wallHeight;
  const notAvailable =
    NotAvailableXLeft ||
    NotAvailableXRight ||
    NotAvailableYTop ||
    NotAvailableYBottom;

  if (notAvailable) {
    return;
  }

  let newLeft = e.clientX - wallLeft - borderLeft - spider.offsetWidth / 2;
  let newTop = e.clientY - wallTop - borderTop - spider.offsetHeight / 2;

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
