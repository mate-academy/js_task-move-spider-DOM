'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const pos = e.target.closest('.wall');

  if (!pos) {
    return;
  }

  const clickX = e.offsetX;
  const clickY = e.offsetY;
  const spiderCenterHeight = spider.height / 2;
  const spiderCenterWidth = spider.width / 2;

  let spiderCoordsTop = (clickY - spiderCenterHeight);
  let spiderCoordsLeft = (clickX - spiderCenterWidth);

  if (spiderCoordsTop < 0) {
    spiderCoordsTop = 0;
  }

  if (spiderCoordsLeft < 0) {
    spiderCoordsLeft = 0;
  }

  if (e.offsetX + spiderCenterWidth > pos.clientWidth) {
    spiderCoordsLeft = pos.clientWidth - spider.width;
  }

  if (e.offsetY + spiderCenterHeight > pos.clientHeight) {
    spiderCoordsTop = pos.clientHeight - spider.height;
  }

  spider.style.top = spiderCoordsTop + 'px';
  spider.style.left = spiderCoordsLeft + 'px';
});
