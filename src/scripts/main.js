'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const getStyle = (elem, styleName) =>
  getComputedStyle(elem).getPropertyValue(styleName);

const leftBorder = parseInt(getStyle(wall, 'border-bottom-width'));
const topBorder = parseInt(getStyle(wall, 'border-top-width'));

const maxRightCoord = parseInt(getStyle(wall, 'width')) - spider.width;
const maxBottomCoord = parseInt(getStyle(wall, 'height')) - spider.height;

const addHorizontalMove = wall.offsetLeft + spider.width - leftBorder * 1.5;
const addVerticalMove = wall.offsetTop + spider.height - topBorder * 1.5;

document.addEventListener('click', e => {
  const currentRightCoord = Math.max(e.clientX - addHorizontalMove, 0);
  const currentBottomCoord = Math.max(e.clientY - addVerticalMove, 0);

  spider.style.left = `${Math.min(currentRightCoord, maxRightCoord)}px`;
  spider.style.top = `${Math.min(currentBottomCoord, maxBottomCoord)}px`;
});
