'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // write code here
  if (spider) {
    const wallPositionInfo = wall.getBoundingClientRect();
    const wallHeight = wallPositionInfo.height;
    const wallWidth = wallPositionInfo.width;

    const spiderPosInfo = spider.getBoundingClientRect();
    const spiderHeight = spiderPosInfo.height;
    const spiderWidth = spiderPosInfo.width;

    const clientSizeY = parseInt(e.clientY);
    const clientSizeX = parseInt(e.clientX);

    const leftWidth = parseInt(screen.availWidth / 2);
    const clearWidth = leftWidth - wallWidth / 2;

    const topHeight = parseInt(screen.availHeight / 2);
    const clearHeight = topHeight - wallHeight / 2;

    const spiderLeft = clientSizeX - clearWidth - spiderHeight / 2;
    const spiderTop = clientSizeY - clearHeight - spiderWidth / 2;

    if (
      spiderLeft <= wallWidth - spiderWidth &&
      spiderTop <= wallHeight - spiderHeight &&
      spiderLeft > 0 &&
      spiderTop > 0
    ) {
      spider.style.left = spiderLeft + 'px';
      spider.style.top = spiderTop + 'px';
    }
  }
});
