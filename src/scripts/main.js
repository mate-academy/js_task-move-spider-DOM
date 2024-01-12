'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const coordXOnWall = e.clientX - wall.offsetLeft - wall.clientLeft;
  const coordYOnWall = e.clientY - wall.offsetTop - wall.clientTop;

  // spider moves on the top side of the wall
  if (coordYOnWall < spider.offsetHeight / 2) {
    spider.style.top = '0';

    // on top right corner
    if (coordXOnWall > wall.clientWidth - spider.offsetWidth / 2) {
      spider.style.left = `${wall.clientWidth - spider.offsetWidth}px`;
    } else if (coordXOnWall < spider.offsetWidth / 2) {
      // on top left corner
      spider.style.left = '0';
    } else { // moving
      spider.style.left = `${coordXOnWall - spider.offsetWidth / 2}px`;
    }
  } else if (coordXOnWall < spider.offsetWidth / 2) {
    // spider moves on the left side of the wall
    spider.style.left = '0';

    if (coordYOnWall > wall.clientHeight - spider.offsetHeight / 2) {
      // on bottom left corner
      spider.style.top = `${wall.clientHeight - spider.offsetHeight}px`;
    } else { // moving
      spider.style.top = `${coordYOnWall - spider.offsetHeight / 2}px`;
    }
  } else if (coordXOnWall > wall.clientWidth - spider.offsetWidth / 2) {
    // spider moves on the right side of the wall
    spider.style.left = `${wall.clientWidth - spider.offsetWidth}px`;

    // on bottom right corner
    if (coordYOnWall > wall.clientHeight - spider.offsetHeight / 2) {
      spider.style.top = `${wall.clientHeight - spider.offsetHeight}px`;
    } else { // moving
      spider.style.top = `${coordYOnWall - spider.offsetHeight / 2}px`;
    }
  } else if (coordYOnWall > wall.clientHeight - spider.offsetHeight / 2) {
    // spider moves on the bottom side of the wall
    spider.style.top = `${wall.clientHeight - spider.offsetHeight}px`;
    spider.style.left = `${coordXOnWall - spider.offsetWidth / 2}px`;
  } else { // spider moves on the wall
    spider.style.left = `${coordXOnWall - spider.offsetWidth / 2}px`;
    spider.style.top = `${coordYOnWall - spider.offsetHeight / 2}px`;
  }
});
