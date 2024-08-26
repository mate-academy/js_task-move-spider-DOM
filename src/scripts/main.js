'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const { offsetX: coordX, offsetY: coordY } = e;
  const { clientHeight: spiderHeight, clientWidth: spiderWidth } = spider;

  const newX = Math.max(
    0,
    Math.min(coordX - spiderHeight / 2, wall.clientWidth - spiderWidth),
  );

  const newY = Math.max(
    0,
    Math.min(coordY - spiderWidth / 2, wall.clientHeight - spiderHeight),
  );

  spider.style.position = 'absolute';
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
