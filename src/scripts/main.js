'use strict';

const spider = document.querySelector('.spider');
const coords = spider.getBoundingClientRect();
const wall = document.querySelector('.wall');
const cWall = wall.getBoundingClientRect();

document.addEventListener('click', (e) => {
  if (e.clientX > wall.clientWidth + cWall.left - coords.width / 2) {
    spider.style.left = `${wall.clientWidth - coords.width}px`;
  } else if (e.clientX < cWall.right - wall.clientWidth + coords.width / 2) {
    spider.style.left = `0px`;
  } else {
    spider.style.left = `${e.clientX - coords.left - coords.width / 2}px`;
  }

  if (e.clientY > wall.clientHeight + cWall.top - coords.height / 2) {
    spider.style.top = `${wall.clientHeight - coords.height}px`;
  } else if (e.clientY < cWall.bottom - wall.clientHeight + coords.height / 2) {
    spider.style.top = `0px`;
  } else {
    spider.style.top = `${e.clientY - coords.top - coords.width / 2}px`;
  }
});
