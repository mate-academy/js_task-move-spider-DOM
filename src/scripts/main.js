'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (event) => {
  let top = event.offsetY - spider.offsetHeight / 2;
  let left = event.offsetX - spider.offsetWidth / 2;

  if (top < 0) {
    top = 0;
  }

  if ((top + spider.offsetHeight / 2)
    > (wall.clientHeight - spider.offsetHeight / 2)) {
    top = wall.clientHeight - spider.offsetHeight;
  }

  if (left < 0) {
    left = 0;
  }

  if ((left + spider.offsetWidth / 2)
    > (wall.clientWidth - spider.offsetWidth / 2)) {
    left = wall.clientHeight - spider.offsetWidth;
  }

  spider.style.top = `${top}px`;
  spider.style.left = `${left}px`;
});
