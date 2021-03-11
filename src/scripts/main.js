'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = [
  spider.clientWidth / 2,
  spider.clientHeight / 2,
];
const borderSide = wall.clientLeft;

document.addEventListener('click', e => {
  const spiderX = e.offsetX - spiderSize[0];
  const spiderY = e.offsetY - spiderSize[1];

  const maxOpenWidth = wall.clientWidth - spiderSize[0];
  const maxOpenHeight = wall.clientWidth - spiderSize[1];

  if (e.target.className !== 'wall') {
    return;
  }

  spider.style.top = spiderY + 'px';
  spider.style.left = spiderX + 'px';

  if (spiderX > maxOpenWidth - spiderSize[0] - borderSide) {
    spider.style.left = (maxOpenWidth - spiderSize[1]) + 'px';
  }

  if (spiderX <= 0) {
    spider.style.left = 0;
  }

  if (spiderY > maxOpenHeight - spiderSize[1] - borderSide) {
    spider.style.top = (maxOpenHeight - spiderSize[1]) + 'px';
  }

  if (spiderY <= 0) {
    spider.style.top = 0;
  }
});
