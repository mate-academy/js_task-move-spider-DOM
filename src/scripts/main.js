'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target.tagName === 'DIV') {
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    const maxPositionY = wall.clientHeight - spiderHeight;
    const maxPositionX = wall.clientWidth - spiderWidth;

    const cursorPositionX = e.offsetX - spiderWidth / 2;
    const cursorPositionY = e.offsetY - spiderHeight / 2;

    const positionX = Math.max(0, Math.min(maxPositionX, cursorPositionX));
    const positionY = Math.max(0, Math.min(maxPositionY, cursorPositionY));

    spider.style.left = positionX + 'px';
    spider.style.top = positionY + 'px';
  }
});
