'use strict';

const spider = document.querySelector('.spider');
const theWall = document.querySelector('.wall');
const theWallWidth = parseInt(theWall.clientWidth);
const theWallHeight = parseInt(theWall.clientHeight);
const theWallBorder = parseInt(theWall.clientTop);

document.addEventListener('click', e => {
  if (!e.target.closest('.wall') || !e.target.className === 'spider') {
    return;
  }

  spider.style.left = coord(
    e.clientX, spider.width, theWall.offsetLeft, theWallWidth
  );

  spider.style.top = coord(
    e.clientY, spider.height, theWall.offsetTop, theWallHeight
  );
});

function coord(mouseCoord, spiderSize, offset, theWallSize) {
  if (
    mouseCoord <= offset + theWallBorder + spiderSize / 2
  ) {
    return `0px`;
  } else if (
    mouseCoord >= offset
    + theWallBorder
    + theWallSize
    - spiderSize / 2
  ) {
    return `${theWallSize - spiderSize}px`;
  } else {
    return `${
      mouseCoord
      - offset
      - theWallBorder
      - spiderSize / 2
    }px`;
  }
}
