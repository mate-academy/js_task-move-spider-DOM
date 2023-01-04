'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  // write code here

  // console.log(e.target.className);

  if (e.target.className === 'wall') {
    const spiderWidth = parseFloat(
      window.getComputedStyle(spider).width);
    const spiderHeight = parseFloat(
      window.getComputedStyle(spider).height);

    const wallWidth = parseFloat(
      window.getComputedStyle(wall).width);
    const wallHeight = parseFloat(
      window.getComputedStyle(wall).height);

    let newX = e.offsetX - (spiderWidth / 2);
    let newY = e.offsetY - (spiderHeight / 2);

    if (e.offsetX < (spiderWidth / 2)) {
      newX = 0;
    } else if ((e.offsetX + (spiderWidth / 2)) > wallWidth) {
      newX = wallWidth - spiderWidth;
    }

    if (e.offsetY < (spiderHeight / 2)) {
      newY = 0;
    } else if ((e.offsetY + (spiderHeight / 2)) > wallHeight) {
      newY = wallHeight - spiderHeight;
    }

    spider.style.cssText = `
      left: ${newX}px;
      top: ${newY}px;
    `;
  }
});
