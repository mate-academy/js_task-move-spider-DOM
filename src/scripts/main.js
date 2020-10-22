'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const borderWidth = parseFloat(
  window.getComputedStyle(wall).getPropertyValue('border-width'));

wall.addEventListener('click', event => {
  event.preventDefault();

  const { left, top, width, height } = wall.getBoundingClientRect();
  const { width: spiderWidth, height: spiderHeight }
    = spider.getBoundingClientRect();

  let clickX = event.clientX - left;
  let clickY = event.clientY - top;
  const virtualBorderLeft = borderWidth + spiderWidth / 2;
  const virtualBorderRight = width - borderWidth - spiderWidth / 2;
  const virtualBorderTop = borderWidth + spiderHeight / 2;
  const virtualBorderBottom = height - borderWidth - spiderHeight / 2;

  if (clickX < virtualBorderLeft) {
    clickX = virtualBorderLeft;
  }

  if (clickX > virtualBorderRight) {
    clickX = virtualBorderRight;
  }

  if (clickY < virtualBorderTop) {
    clickY = virtualBorderTop;
  }

  if (clickY > virtualBorderBottom) {
    clickY = virtualBorderBottom;
  }

  spider.style.left = (clickX - borderWidth - spiderWidth / 2) + 'px';
  spider.style.top = (clickY - borderWidth - spiderHeight / 2) + 'px';
});
