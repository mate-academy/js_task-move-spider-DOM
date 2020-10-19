'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', event => {
  if (!event.target.closest('.wall')) {
    return;
  }

  if (event.offsetX <= spider.offsetWidth / 2) {
    spider.style.left = '0px';
  } else if (event.offsetX >= wall.clientWidth - spider.offsetWidth / 2) {
    spider.style.left = `${wall.clientWidth - spider.offsetWidth}px`;
  } else {
    spider.style.left = `${event.offsetX - spider.offsetWidth / 2}px`;
  }

  if (event.offsetY <= spider.offsetHeight / 2) {
    spider.style.top = '0px';
  } else if (event.offsetY >= wall.clientHeight - spider.offsetHeight / 2) {
    spider.style.top = `${wall.clientHeight - spider.offsetHeight}px`;
  } else {
    spider.style.top = `${event.offsetY - spider.offsetHeight / 2}px`;
  }
});
