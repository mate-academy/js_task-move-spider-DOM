'use strict';

document.addEventListener('click', e => {
  const activePage = e.target.closest('.wall');

  if (!activePage) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const minTop = spider.clientHeight / 2;
  const maxTop = wall.clientHeight - minTop;
  const minLeft = spider.clientWidth / 2;
  const maxLeft = wall.clientWidth - minLeft;

  let topValue = e.offsetY;
  let leftValue = e.offsetX;

  switch (!!topValue) {
    case topValue >= maxTop:
      topValue = maxTop;
      break;
    case topValue <= minTop:
      topValue = minTop;
      break;
  }

  switch (!!leftValue) {
    case leftValue >= maxLeft:
      leftValue = maxLeft;
      break;
    case leftValue <= minLeft:
      leftValue = minLeft;
      break;
  }

  spider.style.top = `${topValue - minTop}px`;
  spider.style.left = `${leftValue - minLeft}px`;
});
