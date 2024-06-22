'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  const corX = e.offsetX;
  const corY = e.offsetY;

  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  let newPositionX = corX - spiderHeight / 2;
  let newPositionY = corY - spiderWidth / 2;

  if (newPositionX < 0) {
    newPositionX = 0;
  }

  if (newPositionY < 0) {
    newPositionY = 0;
  }

  if (newPositionX + spiderWidth > wall.clientWidth) {
    newPositionX = wall.clientWidth - spiderWidth;
  }

  if (newPositionY + spiderHeight > wall.clientHeight) {
    newPositionY = wall.clientHeight - spiderHeight;
  }

  spider.style.position = 'absolute';
  spider.style.left = `${newPositionX}px`;
  spider.style.top = `${newPositionY}px`;
});
