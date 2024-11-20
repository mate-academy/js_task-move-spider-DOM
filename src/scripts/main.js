'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  let newTop =
    e.clientY - wall.clientTop - wall.offsetTop - spider.clientHeight / 2;

  if (newTop < 0) {
    newTop = 0;
  }

  if (wall.clientHeight < spider.clientHeight + newTop) {
    newTop = wall.clientHeight - spider.clientHeight;
  }

  let newLeft =
    e.clientX - wall.clientLeft - wall.offsetLeft - spider.clientWidth / 2;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (wall.clientWidth < spider.clientWidth + newLeft) {
    newLeft = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
