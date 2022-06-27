'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const rect = wall.getBoundingClientRect();

document.addEventListener('click', e => {
  if (e.clientY > rect.bottom - parseInt(getComputedStyle(wall).border)) {
    spider.style.top = `${parseInt(getComputedStyle(wall).height)
      - spider.height}px`;
  } else if (e.clientY < rect.top + parseInt(getComputedStyle(wall).border)) {
    spider.style.top = 0;
  } else {
    spider.style.top = `${e.clientY
      - wall.offsetTop - (spider.height / 2)}px`;
  }

  if (e.clientX > rect.right - parseInt(getComputedStyle(wall).border)) {
    spider.style.left = `${parseInt(getComputedStyle(wall).width)
      - spider.width}px`;
  } else if (e.clientX < rect.left + parseInt(getComputedStyle(wall).border)) {
    spider.style.left = 0;
  } else {
    spider.style.left = `${e.clientX
      - wall.offsetLeft - (spider.width / 2)}px`;
  }
});
