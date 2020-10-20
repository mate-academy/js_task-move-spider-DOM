'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallPositionTop = wall.offsetTop + wall.clientTop;
const wallPositionLeft = wall.offsetLeft + wall.clientLeft;

wall.addEventListener('click', e => {
  let topIndentation = e.clientY - wallPositionTop - spider.height / 2;
  let leftIndentation = e.clientX - wallPositionLeft - spider.width / 2;

  if (topIndentation < 0) {
    topIndentation = 0;
  } else if (topIndentation > wall.clientHeight - spider.width) {
    topIndentation = wall.clientHeight - spider.width;
  }

  if (leftIndentation < 0) {
    leftIndentation = 0;
  } else if (leftIndentation > wall.clientHeight - spider.height) {
    leftIndentation = wall.clientHeight - spider.height;
  }

  spider.style.cssText = `
  top: ${topIndentation}px;
  left: ${leftIndentation}px;
  `;
});
