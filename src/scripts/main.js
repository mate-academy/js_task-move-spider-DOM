'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const maxHeight = wall.clientHeight - spider.clientHeight;
  const maxWidth = wall.clientWidth - spider.clientWidth;

  if (!wall.contains(e.target)) {
    return;
  }

  let coordX = e.offsetX - spider.clientWidth / 2;
  let coordY = e.offsetY - spider.clientHeight / 2;

  switch (true) {
    case coordX < 0:
      coordX = 0;
      break;

    case coordX > maxWidth:
      coordX = maxWidth;
      break;

    default:
      break;
  }

  switch (true) {
    case coordY < 0:
      coordY = 0;
      break;

    case coordY > maxHeight:
      coordY = maxHeight;
      break;

    default:
      break;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
