'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', e => {
  if (e.clientY < wall.offsetTop + wall.clientTop) {
    spider.style.top = 0;
  } else if (e.clientY > wall.offsetTop + wall.clientTop + wallHeight) {
    spider.style.top = `${wallHeight - spiderHeight}px`;
  } else {
    spider.style.top = `
      ${e.clientY - wall.offsetTop - wall.clientTop - spiderHeight / 2}px
    `;
  }

  if (e.clientX < wall.offsetLeft + wall.clientLeft) {
    spider.style.left = 0;
  } else if (e.clientX > wall.offsetLeft + wall.clientLeft + wallWidth) {
    spider.style.left = `${wallWidth - spiderWidth}px`;
  } else {
    spider.style.left = `
      ${e.clientX - wall.offsetLeft - wall.clientLeft - spiderWidth / 2}px
    `;
  }
});
