'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  spider.style.pointerEvents = 'none';

  if (e.target.className !== 'wall' && e.target.className !== 'spider') {
    return;
  }

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;

  let coordSpiderX = e.offsetX - (spider.clientWidth / 2);
  let coordSpiderY = e.offsetY - (spider.clientHeight / 2);

  if (coordSpiderX > maxWidth) {
    coordSpiderX = maxWidth;
  }

  if (coordSpiderY > maxHeight) {
    coordSpiderY = maxHeight;
  }

  if (coordSpiderX < 0) {
    coordSpiderX = 0;
  }

  if (coordSpiderY < 0) {
    coordSpiderY = 0;
  }

  spider.style.left = `${coordSpiderX}px`;
  spider.style.top = `${coordSpiderY}px`;
});
