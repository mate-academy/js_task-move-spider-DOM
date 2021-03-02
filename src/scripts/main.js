'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  if (e.target === spider) {
    return;
  }

  let clickX = e.offsetX;
  let clickY = e.offsetY;
  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;
  const onlywallHeight = wall.clientHeight;
  const onlyWallWidth = wall.clientWidth;

  if (clickX <= spiderWidth / 2) {
    clickX = spiderWidth / 2;
  } else if (clickX >= onlyWallWidth - spiderWidth / 2) {
    clickX = onlyWallWidth - spiderWidth / 2;
  }

  if (clickY <= spiderHeight / 2) {
    clickY = spiderHeight / 2;
  } else if (clickY >= onlywallHeight - spiderHeight / 2) {
    clickY = onlywallHeight - spiderHeight / 2;
  }
  spider.style.top = `${clickY - spider.offsetHeight / 2}px`;
  spider.style.left = `${clickX - spider.offsetWidth / 2}px`;
});
