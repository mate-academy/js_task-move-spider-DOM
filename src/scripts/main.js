'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const horPosition = e.clientX;
  const verPosition = e.clientY;
  const wallCoords = wall.getBoundingClientRect();

  if (e.target !== wall) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const border = parseInt(getComputedStyle(wall).borderWidth);

  const differWidth = horPosition - wallCoords.left;
  const differHeight = verPosition - wallCoords.top;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;
  const finalX = Math.round(
    Math.min(Math.max(differWidth - border - spiderWidth / 2, 0), maxX),
  );
  const finalY = Math.round(
    Math.min(Math.max(differHeight - border - spiderHeight / 2, 0), maxY),
  );

  spider.style.position = 'absolute';

  spider.style.top = `${finalY}px`;
  spider.style.left = `${finalX}px`;
});
