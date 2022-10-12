'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const wallCoord = wall.getBoundingClientRect();
  const spiderCoord = spider.getBoundingClientRect();

  if (e.clientX - e.width * 16 / 2 - parseFloat(getComputedStyle(spider).width)
    / 2 < wallCoord.x) {
    spider.style.left = 0;
  } else if (e.clientX + e.width * 16
    / 2 + parseFloat(getComputedStyle(spider).width)
    / 2 > wallCoord.x + wallCoord.width) {
    spider.style.left = parseFloat(getComputedStyle(wall).width)
    - parseFloat(getComputedStyle(spider).width) + 'px';
  } else {
    spider.style.left = e.clientX - wallCoord.left - spiderCoord.width
    / 2 - e.width * 16 / 2 + 'px';
  }

  if (e.clientY - parseFloat(getComputedStyle(spider).height)
    / 2 < wallCoord.y) {
    spider.style.top = 0;
  } else if (e.clientY + parseFloat(getComputedStyle(spider).width)
    / 2 > wallCoord.y + wallCoord.height) {
    spider.style.top = parseFloat(getComputedStyle(wall).height)
    - parseFloat(getComputedStyle(spider).height) + 'px';
  } else {
    spider.style.top = e.clientY - wallCoord.top - spiderCoord.height
    / 2 - e.width * 16 / 2 + 'px';
  }
});
