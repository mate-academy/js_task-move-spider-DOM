'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let moveY = e.offsetY - (spider.clientHeight / 2);
  let moveX = e.offsetX - (spider.clientWidth / 2);

  const maxClickHeight = wall.clientHeight - spider.clientHeight;
  const maxClickWidth = wall.clientWidth - spider.clientWidth;

  if (moveY < 0) {
    moveY = 0;
  }

  if (moveX < 0) {
    moveX = 0;
  }

  if (moveY > maxClickHeight) {
    spider.style.top = `${maxClickHeight}px`;
  } else {
    spider.style.top = `${moveY}px`;
  }

  if (moveX > maxClickWidth) {
    spider.style.left = `${maxClickWidth}px`;
  } else {
    spider.style.left = `${moveX}px`;
  }
});
