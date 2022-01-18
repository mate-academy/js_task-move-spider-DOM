'use strict';

document.addEventListener('click', e => {
  e.preventDefault();

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

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

  let X = e.offsetX - centerSpiderWidth;

  if (e.offsetX > wallWidth - centerSpiderWidth) {
    X = wallWidth - spiderWidth;
  } else if (X < 0) {
    X = e.offsetX;
  };

  let Y = e.offsetY - centerSpiderHeight;

  if (e.offsetY > wallHeight - centerSpiderHeight) {
    Y = wallHeight - spiderHeight;
  } else if (Y < 0) {
    Y = e.offsetY;
  }

  spider.style.top = Y + 'px';
  spider.style.left = X + 'px';
});
