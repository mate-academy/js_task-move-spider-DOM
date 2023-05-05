'use strict';

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const maxXCoord = wall.clientWidth - spider.clientWidth;
  const maxYCoord = wall.clientHeight - spider.clientHeight;

  let spiderX = e.offsetX - (spider.clientWidth / 2);
  let spiderY = e.offsetY - (spider.clientHeight / 2);

  if (spiderX > maxXCoord) {
    spiderX = maxXCoord;
  }

  if (spiderY > maxYCoord) {
    spiderY = maxYCoord;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
