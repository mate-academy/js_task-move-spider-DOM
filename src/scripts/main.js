'use strict';

const spider = document.querySelector('.spider');
const theWall = document.querySelector('.wall');
const theWallWidth = parseInt(getComputedStyle(theWall).width);
const theWallHeight = parseInt(getComputedStyle(theWall).height);
const theWallBorder = parseInt(getComputedStyle(theWall).border);

document.addEventListener('click', e => {
  if (e.target.closest('.wall') || e.target.className === 'spider') {
    if (e.clientX <= theWall.offsetLeft + theWallBorder + spider.width / 2) {
      spider.style.left = `0px`;
    } else if (
      e.clientX >= theWall.offsetLeft
      + theWallBorder
      + theWallWidth
      - spider.width / 2
    ) {
      spider.style.left = `${theWallWidth - spider.width}px`;
    } else {
      spider.style.left = `${
        e.clientX
        - theWall.offsetLeft
        - theWallBorder
        - spider.width / 2
      }px`;
    }

    if (e.clientY <= theWall.offsetTop + theWallBorder + spider.width / 2) {
      spider.style.top = `0px`;
    } else if (
      e.clientY >= theWall.offsetTop
      + theWallBorder
      + theWallHeight
      - spider.width / 2
    ) {
      spider.style.top = `${theWallHeight - spider.width}px`;
    } else {
      spider.style.top = `${
        e.clientY
        - theWall.offsetTop
        - theWallBorder
        - spider.height / 2
      }px`;
    }
  }
});
