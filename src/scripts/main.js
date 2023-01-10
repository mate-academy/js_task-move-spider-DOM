'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  // write code here
  function getSize(el, prop) {
    return parseFloat(
      window.getComputedStyle(el)[prop]
    );
  };

  if (e.target.className === 'wall') {
    const spiderWidth = getSize(spider, 'width');
    const spiderHeight = getSize(spider, 'height');
    const wallWidth = getSize(wall, 'width');
    const wallHeight = getSize(wall, 'height');
    const halfSpiderWidth = spiderWidth / 2;
    const halfSpiderHeight = spiderHeight / 2;

    const newX = (e.offsetX < halfSpiderWidth)
      ? 0 : (e.offsetX > wallWidth - halfSpiderWidth)
        ? wallWidth - spiderWidth : e.offsetX - halfSpiderWidth;
    const newY = (e.offsetY < halfSpiderHeight)
      ? 0 : (e.offsetY > wallHeight - halfSpiderHeight)
        ? wallHeight - spiderHeight : e.offsetY - halfSpiderHeight;

    spider.style.cssText = `
      left: ${newX}px;
      top: ${newY}px;
    `;
  }
});
