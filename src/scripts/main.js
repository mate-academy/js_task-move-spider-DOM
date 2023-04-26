'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const mouseX = e.pageX - wall.offsetLeft - wall.clientLeft;
    const mouseY = e.pageY - wall.offsetTop - wall.clientTop;

    if (mouseX < spider.clientWidth / 2) {
      spider.style.left = 0 + 'px';
    } else if (mouseX > (wall.clientWidth - spider.clientWidth / 2)) {
      spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
    } else {
      spider.style.left = mouseX - spider.clientWidth / 2 + 'px';
    }

    if (mouseY < spider.clientHeight / 2) {
      spider.style.top = 0 + 'px';
    } else if (mouseY > (wall.clientHeight - spider.clientHeight / 2)) {
      spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
    } else {
      spider.style.top = mouseY - spider.clientHeight / 2 + 'px';
    }
  }
});
