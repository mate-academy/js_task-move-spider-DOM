'use strict';

const spider = document.querySelector('.spider');
const spiderWidth = parseFloat(getComputedStyle(spider).width);
const spiderHeight = parseFloat(getComputedStyle(spider).height);

const wall = document.querySelector('.wall');
const wallLeftBorder = wall.clientLeft;
const wallTopBorder = wall.clientTop;

document.addEventListener('click', e => {
  const { target } = e;

  if (target.className.includes('wall')) {
    const wallLeftOffset = wall.getBoundingClientRect().left;
    const wallTopOffset = wall.getBoundingClientRect().top;
    const wallClientRect = wall.getBoundingClientRect();

    const wallWithoutBorderWidth
      = wallClientRect.right
      - wallClientRect.left
      - wallLeftBorder * 2;

    const wallHeightBorderWidth
      = wallClientRect.bottom
      - wallClientRect.top
      - wallLeftBorder * 2;

    const newPositionX = e.clientX - wallLeftOffset - wallLeftBorder;
    const newPositionY = e.clientY - wallTopOffset - wallTopBorder;

    const setTopPosition = function() {
      if ((newPositionY - spiderHeight / 2) < 0) {
        spider.style.top = `0px`;
      } else if (
        (newPositionY - spiderHeight / 2)
        > (wallHeightBorderWidth - spiderHeight)
      ) {
        spider.style.top = wallHeightBorderWidth - spiderHeight + 'px';
      } else {
        spider.style.top = newPositionY - spiderHeight / 2 + 'px';
      }
    };

    const setLeftPosition = function() {
      if ((newPositionX - spiderWidth / 2) < 0) {
        spider.style.left = 0 + 'px';
      } else if (
        (newPositionX - spiderWidth / 2)
        > (wallWithoutBorderWidth - spiderWidth)
      ) {
        spider.style.left = wallWithoutBorderWidth - spiderWidth + 'px';
      } else {
        spider.style.left = newPositionX - spiderWidth / 2 + 'px';
      }
    };

    setTopPosition();
    setLeftPosition();
  }
});
