'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const item = e.target;

  if (item !== wall) {
    return;
  }

  const wallStyle = getComputedStyle(wall);
  const border = parseFloat(wallStyle.borderBlockEndWidth);
  const wallWidth = parseFloat(wallStyle.width);
  const wallHeight = parseFloat(wallStyle.height);

  const spiderHalf = spider.width / 2;

  let topCoord = e.clientY - wall.offsetTop - border;
  let leftCoord = e.clientX - wall.offsetLeft - border;

  if (leftCoord >= wallWidth - spiderHalf) {
    leftCoord = wallWidth - spiderHalf;
  }

  if (leftCoord <= spiderHalf) {
    leftCoord = spiderHalf;
  }

  if (topCoord >= wallHeight - spiderHalf) {
    topCoord = wallHeight - spiderHalf;
  }

  if (topCoord <= spiderHalf) {
    topCoord = spiderHalf;
  }

  spider.style.transform = 'translate(-50%, -50%)';
  spider.style.top = `${topCoord}px`;
  spider.style.left = `${leftCoord}px`;
});
