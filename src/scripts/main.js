'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const mouseX = e.pageX - wall.offsetLeft - wall.clientLeft;
    const mouseY = e.pageY - wall.offsetTop - wall.clientTop;
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;
    const wallWidth = wall.clientWidth;
    const wallHeigth = wall.clientHeight;

    if (mouseX < spiderWidth / 2) {
      spider.style.left = 0 + 'px';
    } else if (mouseX > (wallWidth - spiderWidth / 2)) {
      spider.style.left = wallWidth - spiderWidth + 'px';
    } else {
      spider.style.left = mouseX - spiderWidth / 2 + 'px';
    }

    if (mouseY < spiderHeight / 2) {
      spider.style.top = 0 + 'px';
    } else if (mouseY > (wallHeigth - spiderHeight / 2)) {
      spider.style.top = wallHeigth - spiderHeight + 'px';
    } else {
      spider.style.top = mouseY - spiderHeight / 2 + 'px';
    }
  }
});
