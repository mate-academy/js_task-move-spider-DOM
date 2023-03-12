/* eslint-disable max-len */
'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');
  const wallBorderWidth = parseInt(getComputedStyle(wall).borderWidth);
  const wallHeight = wall.offsetHeight;
  const wallWidth = wall.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const diffSizeHeight = wallHeight - spiderHeight - wallBorderWidth * 2;
  const diffSizeWidth = wallWidth - spiderWidth - wallBorderWidth * 2;

  if (e.target.className !== 'wall') {
    return;
  }

  let spiderY = `${e.clientY - wall.offsetTop - wallBorderWidth - spiderHeight / 2}px`;
  let spiderX = `${e.clientX - wall.offsetLeft - wallBorderWidth - spiderWidth / 2}px`;

  if (parseInt(spiderY) < 0) {
    spiderY = 0;
  }

  if (parseInt(spiderX) < 0) {
    spiderX = 0;
  }

  if (parseInt(spiderY) > diffSizeHeight) {
    spiderY = `${diffSizeHeight}px`;
  }

  if (parseInt(spiderX) > diffSizeWidth) {
    spiderX = `${diffSizeWidth}px`;
  }

  spider.style.left = spiderX;
  spider.style.top = spiderY;
});
