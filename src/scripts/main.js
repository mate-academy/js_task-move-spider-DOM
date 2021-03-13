'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = {
  width: (spider.clientWidth / 2),
  height: (spider.clientHeight / 2),
};

document.addEventListener('click', clickEvent => {
  if (clickEvent.target.className !== 'wall') {
    return;
  }

  let spiderX = clickEvent.offsetX - spiderSize.width;
  let spiderY = clickEvent.offsetY - spiderSize.height;

  const maxOpenWidth = wall.clientWidth - spiderSize.width;
  const maxOpenHeight = wall.clientWidth - spiderSize.height;

  if (clickEvent.offsetX > maxOpenWidth) {
    spiderX = (maxOpenWidth - spiderSize.width);
  }

  if (clickEvent.offsetX - spiderSize.width <= 0) {
    spiderX = 0;
  }

  if (clickEvent.offsetY > maxOpenHeight) {
    spiderY = (maxOpenHeight - spiderSize.height);
  }

  if (clickEvent.offsetY - spiderSize.height <= 0) {
    spiderY = 0;
  }

  spider.style.top = spiderY + 'px';
  spider.style.left = spiderX + 'px';
});
