'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.addEventListener('click', e => {
  const wallCoords = wall.getBoundingClientRect();

  let spiderTopY = e.clientY - wallCoords.top
     - wall.clientTop - spiderHeight / 2;
  let spiderTopX = e.clientX - wallCoords.left
    - wall.clientLeft - spiderWidth / 2;

  if (spiderTopY < 0) {
    spiderTopY = 0;
  }

  if (spiderTopX < 0) {
    spiderTopX = 0;
  }

  if (spiderTopX + spiderWidth > wall.clientWidth) {
    spiderTopX = wall.clientWidth - spiderWidth;
  }

  if (spiderTopY + spiderHeight > wall.clientHeight) {
    spiderTopY = wall.clientHeight - spiderHeight;
  }
  spider.style.top = `${spiderTopY}px`;
  spider.style.left = `${spiderTopX}px`;
});
