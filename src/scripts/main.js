'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let x = e.clientX - wallCoords.left - spiderWidth / 2;
  let y = e.clientY - wallCoords.top - spiderHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (x + spiderWidth > wallCoords.width) {
    x = wallCoords.width - spiderWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y + spiderHeight > wallCoords.height) {
    y = wallCoords.height - spiderHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
