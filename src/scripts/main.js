'use strict';

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;

  let topSp = e.offsetY - spider.clientHeight / 2;
  let leftSp = e.offsetX - spider.clientWidth / 2;

  topSp = topSp > 0 ? topSp : 0;
  topSp = topSp < maxTop ? topSp : maxTop;
  leftSp = leftSp > 0 ? leftSp : 0;
  leftSp = leftSp < maxLeft ? leftSp : maxLeft;

  spider.style.top = topSp + 'px';
  spider.style.left = leftSp + 'px';
});
