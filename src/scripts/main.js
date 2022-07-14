'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const coordTop = e.offsetY;
  const coordLeft = e.offsetX;
  const spiderHeight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const maxLeft = wallWidth - spiderWidth;
  const maxHeight = wallHeight - spiderHeight;
  const minCoord = '0px';

  if (coordTop >= maxHeight) {
    spider.style.top = `${maxHeight}px`;
  } else if (coordTop <= spiderHeight) {
    spider.style.top = minCoord;
  } else {
    spider.style.top = `${coordTop - (spiderHeight / 2)}px`;
  }

  if (coordLeft >= maxLeft) {
    spider.style.left = `${maxLeft}px`;
  } else if (coordLeft <= spiderWidth) {
    spider.style.left = minCoord;
  } else {
    spider.style.left = `${coordLeft - (spiderWidth / 2)}px`;
  }
});
