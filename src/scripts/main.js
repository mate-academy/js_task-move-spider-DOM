'use strict';

const wall = document.getElementsByClassName('wall')[0];
const spider = document.getElementsByClassName('spider')[0];

wall.addEventListener('click', event => {
  event.preventDefault();

  const { left, top, width, height } = wall.getBoundingClientRect();

  const borderWidth = parseFloat(
    window.getComputedStyle(wall).getPropertyValue('border-width'));
  const spiderWidth = spider.getBoundingClientRect().width;
  const spiderHeight = spider.getBoundingClientRect().height;

  let clickX = event.clientX - left;
  let clickY = event.clientY - top;

  if (clickX < borderWidth + spiderWidth / 2) {
    clickX = borderWidth + spiderWidth / 2;
  }

  if (clickX > width - borderWidth - spiderWidth / 2) {
    clickX = width - borderWidth - spiderWidth / 2;
  }

  if (clickY < borderWidth + spiderHeight / 2) {
    clickY = borderWidth + spiderHeight / 2;
  }

  if (clickY > height - borderWidth - spiderHeight / 2) {
    clickY = height - borderWidth - spiderHeight / 2;
  }

  spider.style.left = (clickX - borderWidth - spiderWidth / 2) + 'px';
  spider.style.top = (clickY - borderWidth - spiderHeight / 2) + 'px';
});
