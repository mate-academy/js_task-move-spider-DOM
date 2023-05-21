'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const { clientHeight, clientWidth } = wall;
  const { clientHeight: spiderHeight, clientWidth: spiderWidth } = spider;
  const borderY = clientHeight - spiderHeight;
  const borderX = clientWidth - spiderWidth;

  if (e.target !== wall) {
    return;
  }

  let newCordY = e.offsetY - spiderHeight / 2;
  let newCordX = e.offsetX - spiderWidth / 2;

  newCordY = newCordY > borderY ? borderY : newCordY;
  newCordY = newCordY < 0 ? 0 : newCordY;
  newCordX = newCordX > borderX ? borderX : newCordX;
  newCordX = newCordX < 0 ? 0 : newCordX;

  spider.style.top = newCordY + 'px';
  spider.style.left = newCordX + 'px';
});
