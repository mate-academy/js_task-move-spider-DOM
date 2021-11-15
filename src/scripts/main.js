'use strict';

const spiderMan = document.querySelector('.spider');
const manhattanBuilding = document.querySelector('.wall');

const wallWidth = manhattanBuilding.clientWidth;
const wallHeight = manhattanBuilding.clientHeight;

manhattanBuilding.addEventListener('click', e => {
  if (e.target === spiderMan) {
    return;
  }

  let moveX;
  let moveY;

  if (e.offsetX - spiderMan.width < 0) {
    moveX = 0;
  } else if (e.offsetX + spiderMan.width > wallWidth) {
    moveX = wallWidth - spiderMan.width;
  } else {
    moveX = e.offsetX - spiderMan.width / 2;
  }

  if (e.offsetY - spiderMan.height < 0) {
    moveY = 0;
  } else if (e.offsetY + spiderMan.height > wallHeight) {
    moveY = wallHeight - spiderMan.height;
  } else {
    moveY = e.offsetY - spiderMan.height / 2;
  }

  spiderMan.style.left = moveX + 'px';
  spiderMan.style.top = moveY + 'px';
});
