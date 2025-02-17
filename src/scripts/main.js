'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();

  spider.style.position = 'absolute';
  spider.style.padding = 0;
  spider.style.margin = 0;
  wall.style.position = 'relative';

  const spiderHeight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;

  let x = e.clientX - wallCoords.left - spiderWidth / 2 - 10;
  let y = e.clientY - wallCoords.top - spiderHeight / 2 - 10;

  if (x < 0) {
    x = 0;
  }

  if (x + spiderWidth > wallCoords.width - 10) {
    x = wallCoords.width - spiderWidth - 20;
  }

  if (y < 0) {
    y = 0;
  }

  if (y + spiderHeight > wallCoords.height - 10) {
    y = wallCoords.height - spiderHeight - 20;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
