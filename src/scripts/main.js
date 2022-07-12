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

  spider.style.top = (coordTop >= maxHeight)
    ? `${maxHeight}px`
    : (coordTop <= spiderHeight)
      ? minCoord
      : `${coordTop - (spiderHeight / 2)}px`;

  spider.style.left = (coordLeft >= maxLeft)
    ? `${maxLeft}px`
    : (coordLeft <= spiderWidth)
      ? minCoord
      : `${coordLeft - (spiderWidth / 2)}px`;
});
