'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  // write code here
  const top = e.offsetY - (spider.height / 2);
  const left = e.offsetX - (spider.width / 2);
  const maxHeight = wall.clientHeight - spider.height;
  const maxWidth = wall.clientWidth - spider.width;

  let styleTop;
  let styleLeft;

  if (top < 0) {
    styleTop = '0px';
  } else if (top > maxHeight) {
    styleTop = `${maxHeight}px`;
  } else {
    styleTop = `${top}px`;
  }

  if (left < 0) {
    styleLeft = '0px';
  } else if (left > maxWidth) {
    styleLeft = `${maxWidth}px`;
  } else {
    styleLeft = `${left}px`;
  }

  spider.style.top = styleTop;
  spider.style.left = styleLeft;
});
