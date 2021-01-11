'use strict';

const spider = document.querySelector('.spider');
const theWall = document.querySelector('.wall');
const theWallWidth = theWall.clientWidth;
const theWallHeight = theWall.clientHeight;

let xCoord;
let yCoord;

theWall.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    xCoord = e.offsetX;
    yCoord = e.offsetY;
  }

  if (e.target.className === 'spider') {
    xCoord = e.offsetX + e.target.offsetLeft;
    yCoord = e.offsetY + e.target.offsetTop;
  }

  spider.style.left = coord(
    xCoord, spider.width, theWallWidth
  );

  spider.style.top = coord(
    yCoord, spider.height, theWallHeight
  );
});

function coord(mouseCoord, spiderSize, theWallSize) {
  if (mouseCoord <= spiderSize / 2) {
    return `0px`;
  } else if (
    mouseCoord >= theWallSize - spiderSize / 2
  ) {
    return `${theWallSize - spiderSize}px`;
  } else {
    return `${mouseCoord - spiderSize / 2}px`;
  }
}
