'use strict';

document.addEventListener('click', e => {
  const playGround = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const borderWidth = parseFloat(getComputedStyle(playGround).borderWidth);
  const spiderHalfSize = spider.clientHeight / 2;
  const playGroundHeight = playGround.clientHeight;
  const playGroundWidth = playGround.clientWidth;

  if (document.elementFromPoint(e.clientX, e.clientY) !== playGround) {
    return;
  };

  if (e.offsetY < borderWidth + spiderHalfSize) {
    spider.style.top = `${spiderHalfSize}px`;
  } else if (playGroundHeight - e.offsetY < borderWidth + spiderHalfSize) {
    spider.style.top = `${playGroundHeight - spiderHalfSize}px`;
  } else {
    spider.style.top = `${e.offsetY}px`;
  }

  if (e.offsetX < borderWidth + spiderHalfSize) {
    spider.style.left = `${spiderHalfSize}px`;
  } else if (playGroundWidth - e.offsetX < borderWidth + spiderHalfSize) {
    spider.style.left = `${playGroundWidth - spiderHalfSize}px`;
  } else {
    spider.style.left = `${e.offsetX}px`;
  }

  spider.style.transform = 'translate(-50%, -50%)';
});
