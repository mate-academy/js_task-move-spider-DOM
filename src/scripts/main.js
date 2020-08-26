'use strict';

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderStyle = window.getComputedStyle(spider);
  const spiderWidth = parseInt(spiderStyle.width);
  const spiderHeight = parseInt(spiderStyle.height);

  const wallStyle = window.getComputedStyle(wall);
  const wallWidth = parseInt(wallStyle.width);
  const wallHeight = parseInt(wallStyle.height);

  let transformX;
  let transformY;

  if (e.offsetX > (wallWidth - spiderWidth)) {
    transformX = wallWidth - spiderWidth;
  } else if (e.offsetX < spiderWidth / 2) {
    transformX = 0;
  } else {
    transformX = e.offsetX - spiderWidth / 2;
  }

  if (e.offsetY > (wallHeight - spiderHeight)) {
    transformY = wallHeight - spiderHeight;
  } else if (e.offsetY < spiderHeight / 2) {
    transformY = 0;
  } else {
    transformY = e.offsetY - spiderHeight / 2;
  }

  spider.style.transform = `
    translate(
      ${transformX}px,
      ${transformY}px
  `;
});
