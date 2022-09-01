'use strict';

document.addEventListener('click', e => {
  e.preventDefault();

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.position = 'absolute';

  const wallHeight = parseFloat(wall.clientHeight);
  const wallWidth = parseFloat(wall.clientWidth);
  const spiderHeight = parseFloat(spider.offsetHeight);
  const centerSpiderHeight = spiderHeight / 2;
  const spiderWidth = parseFloat(spider.offsetWidth);
  const centerSpiderWidth = spiderWidth / 2;

  if (!e.target.classList.contains('wall')) {
    return;
  }

  let coordX = e.offsetX - centerSpiderWidth;

  if (e.offsetX > wallWidth - centerSpiderWidth) {
    coordX = wallWidth - spiderWidth;
  } else if (coordX < 0) {
    coordX = e.offsetX;
  };

  let coordY = e.offsetY - centerSpiderHeight;

  if (e.offsetY > wallHeight - centerSpiderHeight) {
    coordY = wallHeight - spiderHeight;
  } else if (coordY < 0) {
    coordY = e.offsetY;
  }

  spider.style.top = coordY + 'px';
  spider.style.left = coordX + 'px';
});
