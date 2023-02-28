/* eslint-disable no-shadow */
'use strict';

const spider = document.querySelector('.spider');

const walls = document.querySelector('.wall');

walls.addEventListener('click', (event) => {
  const clickX = event.clientX - walls.offsetLeft;
  const clickY = event.clientY - walls.offsetTop;
  const maxWidth = walls.clientWidth - spider.offsetWidth;
  const maxHeight = walls.clientHeight - spider.offsetWidth;

  let newSpiderX = clickX - spider.offsetWidth / 1.5;
  let newSpiderY = clickY - spider.offsetHeight / 1.5;

  if (newSpiderX > maxWidth) {
    newSpiderX = maxWidth;
  } else if (newSpiderX < 0) {
    newSpiderX = 0;
  }

  if (newSpiderY > maxHeight) {
    newSpiderY = maxHeight;
  } else if (newSpiderY < 0) {
    newSpiderY = 0;
  }

  spider.style.left = `${newSpiderX}px`;
  spider.style.top = `${newSpiderY}px`;
});
