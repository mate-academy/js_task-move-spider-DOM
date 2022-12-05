'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall')
const coordsWall = wall.getBoundingClientRect();
   
    const wallX = coordsWall['x'];
    const wallY = coordsWall['y'];

    spider.style.top = wallY + 'px';
    spider.style.left = wallX + 'px';
    spider.style.position = 'fixed';

document.addEventListener('click', e => {
    let item = e.target;
    const itemParent = item.closest('.wall');

    if (itemParent === null) {
      return;
    }
 
    let x = e.clientX;
    let y = e.clientY;  
    spider.style.left = x - (spider.offsetWidth/2)  +'px' ;
    spider.style.top = y - (spider.offsetHeight / 2) + 'px';
  });