'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallPositionTop = wall.offsetTop + wall.clientTop;
const wallPositionLeft = wall.offsetLeft + wall.clientLeft;

wall.addEventListener('click', e => {
  const topIndentation = e.clientY - wallPositionTop - spider.height / 2;
  const leftIndentation = e.clientX - wallPositionLeft - spider.width / 2;

  spider.style.cssText = `
  top: ${topIndentation < 0 ? 0 : topIndentation}px;
  left: ${leftIndentation < 0 ? 0 : leftIndentation}px;
  `;
});
