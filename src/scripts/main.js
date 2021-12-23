'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.classList.contains('wall')) {
    return;
  }

  let height = e.offsetY - spider.clientHeight / 2;
  let width = e.offsetX - spider.clientWidth / 2;

  const maxHeight = wall.clientHeight - spider.clientHeight;
  const maxWidth = wall.clientWidth - spider.clientWidth;

  if (height < 0) {
    height = 0;
  }

  if (width < 0) {
    width = 0;
  }

  if (height > maxHeight) {
    height = maxHeight;
  }

  if (width > maxWidth) {
    width = maxWidth;
  }
  spider.style.top = height + 'px';
  spider.style.left = width + 'px';
});
