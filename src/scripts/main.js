'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let newX = e.clientX - wall.getBoundingClientRect().left - wall.clientLeft;
  let newY = e.clientY - wall.getBoundingClientRect().top - wall.clientTop;

  if (newX < 0 || newY < 0
    || newX >= wall.clientWidth || newY >= wall.clientHeight) {
    return;
  }

  newX = Math.min(Math.max(newX, spider.clientWidth / 2),
    wall.clientWidth - spider.clientWidth / 2);

  newY = Math.min(Math.max(newY, spider.clientHeight / 2),
    wall.clientHeight - spider.clientHeight / 2);

  spider.style.top = `${newY - spider.clientHeight / 2}px`;
  spider.style.left = `${newX - spider.clientWidth / 2}px`;
});
