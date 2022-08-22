'use strict';

const spider = document.getElementsByClassName('spider')[0];
const wall = document.getElementsByClassName('wall')[0];

document.addEventListener('click', e => {
  const border = wall.clientLeft;
  const halfWidth = spider.width / 2;

  const indentX = e.clientX - wall.offsetLeft - halfWidth - border;
  const indentY = e.clientY - wall.offsetTop - halfWidth - border;

  if (e.target.closest('.wall')) {
    spider.style.left = indentX + 'px';
    spider.style.top = indentY + 'px';
  };

  if (indentX < 0) {
    spider.style.left = 0 + 'px';
  }

  if (indentX > wall.clientWidth - spider.width) {
    spider.style.left = wall.clientWidth - spider.width + 'px';
  }

  if (indentY < 0) {
    spider.style.top = 0 + 'px';
  }

  if (indentY > wall.clientHeight - spider.width) {
    spider.style.top = wall.clientHeight - spider.width + 'px';
  }

});
