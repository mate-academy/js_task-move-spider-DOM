'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (evnt) => {
  if (evnt.target === spider) {
    if ((spider.clientWidth / 2 - evnt.offsetX) > spider.offsetLeft) {
      spider.style.left = '0px';
    } else if (evnt.offsetX
      > wall.clientWidth - spider.offsetLeft - spider.clientWidth / 2) {
      spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    } else {
      spider.style.left = `${spider.offsetLeft
        - (spider.clientWidth / 2 - evnt.offsetX)}px`;
    }
  }

  if (evnt.target === wall) {
    if (evnt.offsetX < spider.clientWidth) {
      spider.style.left = `0px`;
    } else if (wall.offsetWidth - evnt.offsetX < spider.clientWidth) {
      spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    } else {
      spider.style.left = `${evnt.offsetX - spider.clientWidth / 2}px`;
    }
  }

  if (evnt.target === spider) {
    if ((spider.clientHeight / 2 - evnt.offsetY) > spider.offsetTop) {
      spider.style.top = '0px';
    } else if (evnt.offsetY
      > wall.clientHeight - spider.offsetTop - spider.clientHeight / 2) {
      spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
    } else {
      spider.style.top = `${spider.offsetTop
        - (spider.clientHeight / 2 - evnt.offsetY)}px`;
    }
  }

  if (evnt.target === wall) {
    if (evnt.offsetY < spider.clientHeight) {
      spider.style.top = `0px`;
    } else if (wall.offsetHeight - evnt.offsetY < spider.clientHeight) {
      spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
    } else {
      spider.style.top = `${evnt.offsetY - spider.clientHeight / 2}px`;
    }
  }
});
