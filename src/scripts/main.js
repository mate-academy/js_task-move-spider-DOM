'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const wallCoord = wall.getBoundingClientRect();
  const spiderCoord = spider.getBoundingClientRect();

  if (e.clientX >= wallCoord.x
    && e.clientX <= wallCoord.x + wallCoord.width
    && e.clientY >= wallCoord.y
    && e.clientY <= wallCoord.y + wallCoord.height) {
    if (e.clientX - wallCoord.x - spiderCoord.width
      / 2 - e.width * 16 / 2 < 0) {
      spider.style.left = 0;
    } else if (e.clientX - wallCoord.x + spiderCoord.width
      / 2 - e.width * 16 / 2 > wallCoord.width) {
      spider.style.left = wallCoord.width - spiderCoord.width
      - parseFloat(getComputedStyle(wall).borderWidth) * 2 + 'px';
    } else if (e.clientX - wallCoord.x + spiderCoord.width
      / 2 - e.width * 16 / 2 < wallCoord.width
      - parseFloat(getComputedStyle(wall).borderWidth) * 2) {
      spider.style.left = e.clientX - wallCoord.x - spiderCoord.width
      / 2 - e.width * 16 / 2 + 'px';
    }

    if (e.clientY - wallCoord.y - spiderCoord.height
      / 2 - e.height * 16 / 2 < 0) {
      spider.style.top = 0 + 'px';
    } else if (e.clientY - wallCoord.y + spiderCoord.height
      / 2 - e.height * 16 / 2 > wallCoord.height) {
      spider.style.top = wallCoord.height - spiderCoord.height
      - parseFloat(getComputedStyle(wall).borderWidth) * 2 + 'px';
    } else if (e.clientY - wallCoord.y + spiderCoord.height
      / 2 - e.height * 16 / 2 < wallCoord.height
      - parseFloat(getComputedStyle(wall).borderWidth) * 2) {
      spider.style.top = e.clientY - wallCoord.y - spiderCoord.height
      / 2 - e.height * 16 / 2 + 'px';
    }
  }
});
