'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallRect = wall.getBoundingClientRect();
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', (e) => {
  const spiderX = e.clientX - wallRect.left - spiderWidth / 2;
  const spiderY = e.clientY - wallRect.top - spiderHeight / 2;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  if (
    spiderX >= 0 &&
    spiderY >= 0 &&
    spiderX <= wallWidth - spiderWidth &&
    spiderY <= wallHeight - spiderHeight
  ) {
    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  } else {
    alert('You can only move the spider within the wall!');
  }
});
