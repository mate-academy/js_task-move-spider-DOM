'use strict';

const wall = document.querySelector('.wall');
const wallCoords = wall.getBoundingClientRect();
const wallComputedStyle = getComputedStyle(wall);
const wallBorderWidth = parseInt(wallComputedStyle.borderWidth, 10);
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const UsualSpiderStyleTop =
    e.clientY - wallCoords.top - spider.offsetHeight / 2 - wallBorderWidth;
  const UsualSpiderStyleLeft =
    e.clientX - wallCoords.left - spider.offsetWidth / 2 - wallBorderWidth;

  if (UsualSpiderStyleTop < 0) {
    spider.style.top = '0';
  } else if (
    UsualSpiderStyleTop >
    wall.offsetHeight - spider.offsetHeight - wallBorderWidth
  ) {
    spider.style.top = `${wall.offsetHeight - spider.offsetHeight - (2 * wallBorderWidth)}px`;
  } else {
    spider.style.top = `${UsualSpiderStyleTop}px`;
  }

  if (UsualSpiderStyleLeft < 0) {
    spider.style.left = '0';
  } else if (
    UsualSpiderStyleLeft >
    wall.offsetWidth - spider.offsetWidth - wallBorderWidth
  ) {
    spider.style.left = `${wall.offsetWidth - spider.offsetWidth - (2 * wallBorderWidth)}px`;
  } else {
    spider.style.left = `${UsualSpiderStyleLeft}px`;
  }
});
