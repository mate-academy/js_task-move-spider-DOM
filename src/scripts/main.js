'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  // write code here
  const target = e.target.closest('.wall');
  const wallBounding = wall.getBoundingClientRect();

  if (target) {
    const x = e.clientX;
    const y = e.clientY;
    // current cursor position

    const wallWidth = parseFloat(getComputedStyle(wall).width);
    const wallHeight = parseFloat(getComputedStyle(wall).height);
    const leftBorder = parseFloat(getComputedStyle(wall).borderLeftWidth);
    const topBorder = parseFloat(getComputedStyle(wall).borderTopWidth);
    // wall sizes

    const moveX = x - wallBounding.x - leftBorder - spider.offsetWidth / 2;
    const moveY = y - wallBounding.y - topBorder - spider.offsetHeight / 2;
    // default axises moving

    const moveXmax = wallWidth - spider.offsetWidth;
    const moveYmax = wallHeight - spider.offsetHeight;
    // axises moving in case of clicking on the walls border

    if (moveX > wallWidth - spider.offsetWidth) {
      spider.style.left = `${moveXmax}px`;
    } else if (moveX < 0) {
      spider.style.left = 0;
    } else {
      spider.style.left = `${moveX}px`;
    }
    // X axis behavior

    if (moveY > wallHeight - spider.offsetHeight) {
      spider.style.top = `${moveYmax}px`;
    } else if (moveY < 0) {
      spider.style.top = 0;
    } else {
      spider.style.top = `${moveY}px`;
    }
    // Y axis behavior
  }
});
