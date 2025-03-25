'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const horisontPosition = e.clientX;
  const verticalPosition = e.clientY;
  const wallCoords = wall.getBoundingClientRect();
  const wallStyle = getComputedStyle(wall);
  const wallBorderWidth = parseInt(wallStyle.borderTopWidth);

  if (e.target !== wall) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const differWidth = horisontPosition - wallCoords.left;
  const differHeight = verticalPosition - wallCoords.top;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  const finalX = Math.min(
    Math.max(differWidth - spiderWidth / 2 - wallBorderWidth, 0),
    maxX,
  );
  const finalY = Math.min(
    Math.max(differHeight - spiderHeight / 2 - wallBorderWidth, 0),
    maxY,
  );

  spider.style.top = finalY + 'px';
  spider.style.left = finalX + 'px';
});
