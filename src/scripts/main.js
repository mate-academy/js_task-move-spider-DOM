'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const item = e.target.closest('.wall');

  if (!item) {
    return;
  }

  let spiderCoordsTop = (e.offsetY - spider.height / 2);
  let spiderCoordsLeft = (e.offsetX - spider.width / 2);

  if (spiderCoordsTop < 0) {
    spiderCoordsTop = 0;
  }

  if (spiderCoordsLeft < 0) {
    spiderCoordsLeft = 0;
  }

  if (e.offsetX > item.clientWidth) {
    spiderCoordsLeft = item.clientWidth - spider.width;
  }

  if (e.offsetY > item.clientHeight) {
    spiderCoordsTop = item.clientHeight - spider.height;
  }

  spider.style.top = spiderCoordsTop + 'px';
  spider.style.left = spiderCoordsLeft + 'px';
});
