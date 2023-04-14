'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const borderWidth = (wall.offsetHeight - wall.clientHeight) / 2;
let diffY = wall.getBoundingClientRect().top;
let diffX = wall.getBoundingClientRect().left;

window.visualViewport.onresize = () => {
  diffY = wall.getBoundingClientRect().top;
  diffX = wall.getBoundingClientRect().left;
};

document.addEventListener('click', e => {
  const wallTarget = e.target.closest('.wall');

  if (wallTarget) {
    const moveToY = e.clientY - diffY - borderWidth;
    const moveToX = e.clientX - diffX - borderWidth;

    const minTop = spider.clientHeight / 2;
    const maxTop = wall.clientHeight - minTop;
    const minLeft = spider.clientWidth / 2;
    const maxLeft = wall.clientHeight - minLeft;

    spider.style.top = moveToY < minTop 
      ? minTop + 'px'
      : moveToY > maxTop ? maxTop + 'px' : moveToY + 'px';

    spider.style.left = moveToX < minLeft ? minLeft + 'px'
      : moveToX > maxLeft ? maxLeft + 'px' : moveToX + 'px';
    spider.style.transform = 'translate(-50%, -50%)';
  }
});
