'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallBounds = wall.getBoundingClientRect();

  let clientY = e.clientY - spider.getBoundingClientRect().height / 2;
  let clientX = e.clientX - spider.getBoundingClientRect().width / 2;

  if (clientY < wallBounds.top) {
    clientY = wallBounds.top;
  }

  if (clientY > wallBounds.top + wall.clientHeight - spider.height) {
    clientY = wallBounds.top + wall.clientHeight - spider.height;
  }

  if (clientX < wallBounds.left) {
    clientX = wallBounds.left;
  }

  if (clientX > wallBounds.left + wall.clientWidth - spider.width) {
    clientX = wallBounds.left + wall.clientWidth - spider.width;
  }

  spider.style.top = clientY - wallBounds.top + 'px';
  spider.style.left = clientX - wallBounds.left + 'px';
});
