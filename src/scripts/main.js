'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const wallStyles = getComputedStyle(wall);
const borderSizeWall = parseFloat(wallStyles.borderWidth);
const wallSize = parseFloat(wallStyles.width);
const spiderSize = spider.width;

wall.addEventListener('click', e => {
  let moveTop = e.pageY - e.currentTarget.offsetTop - borderSizeWall;
  let moveLeft = e.pageX - e.currentTarget.offsetLeft - borderSizeWall;
  let translateSpiderX = 50;
  let translateSpiderY = 50;

  if (moveTop <= spiderSize / 2) {
    moveTop = 0;
    translateSpiderY = 0;
  }

  if (moveTop >= wallSize - spiderSize / 2) {
    moveTop = wallSize - spiderSize / 2;
  }

  if (moveLeft <= spiderSize / 2) {
    moveLeft = 0;
    translateSpiderX = 0;
  }

  if (moveLeft >= wallSize - spiderSize / 2) {
    moveLeft = wallSize - spiderSize / 2;
  }

  spider.style.top = `${moveTop}px`;
  spider.style.left = `${moveLeft}px`;
  spider.style.transform = `translate(-${translateSpiderX}%` +
   `, -${translateSpiderY}%)`;
});
