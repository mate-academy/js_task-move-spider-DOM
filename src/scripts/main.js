'use strict';

document.addEventListener('click', e => {
  const place = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let clientX = e.offsetX - spiderWidth / 2;
  let clientY = e.offsetY - spiderHeight / 2;

  const maxX = place.clientWidth - spiderWidth;
  const maxY = place.clientHeight - spiderHeight;
  const minX = 0;
  const minY = 0;

  if (clientX > maxX) {
    clientX = maxX;
  }

  if (clientY > maxY) {
    clientY = maxY;
  }

  if (clientX < minX) {
    clientX = minX;
  }

  if (clientY < minY) {
    clientY = minY;
  }

  spider.style.left = `${clientX}px`;
  spider.style.top = `${clientY}px`;
});
