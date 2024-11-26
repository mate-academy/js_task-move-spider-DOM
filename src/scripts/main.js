'use strict';

let wall = document.querySelector('.wall');
let spider = document.querySelector('.spider');
let wallOffsetLeft = wall.offsetLeft;
let wallOffsetTop = wall.offsetTop;

document.addEventListener('click', (e) => {
  if (e.target.className !== 'wall') {
    return;
  }

  if (e.target.className === 'wall') {
    spider.style.cssText = 'transform: translate(-50%, -50%)';
    spider.style.left = e.clientX - wallOffsetLeft - wall.clientLeft + 'px';
    spider.style.top = e.clientY - wallOffsetTop - wall.clientTop + 'px';
  }
});
