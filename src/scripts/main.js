'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.classList.contains('wall')) {
    return;
  }

  let width = e.offsetX - spider.clientWidth / 2;
  let height = e.offsetY - spider.clientHeight / 2;

  if (width < 0) {
    width = 0;
  }

  if (height < 0) {
    height = 0;
  }

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;

  if (height > maxHeight) {
    height = maxHeight;
  }

  if (width > maxWidth) {
    width = maxWidth;
  }

  spider.style.left = `${width}px`;
  spider.style.top = `${height}px`;
});
