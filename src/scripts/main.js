'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const getStyle = (elem, styleName) =>
  getComputedStyle(elem).getPropertyValue(styleName);

const leftBorder = parseInt(getStyle(wall, 'border-bottom-width'));
const topBorder = parseInt(getStyle(wall, 'border-top-width'));

const maxRightCoord = parseInt(getStyle(wall, 'width')) - spider.width;
const maxBottomCoord = parseInt(getStyle(wall, 'height')) - spider.height;

const addHorizontalMove = wall.offsetLeft + spider.width - leftBorder;
const addVerticalMove = wall.offsetTop + spider.height - topBorder;

document.addEventListener('click', e => {
  spider.style.left = `${Math.min(Math.max(e.clientX - addHorizontalMove, 0), maxRightCoord)}px`;
  spider.style.top = `${Math.min(Math.max(e.clientY - addVerticalMove, 0), maxBottomCoord)}px`;
});
