'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderParams = spider.getBoundingClientRect();
  let coordsY = e.clientY - wall.offsetTop
    - wall.clientTop - spiderParams.width / 2;
  let coordsX = e.clientX - wall.offsetLeft
    - wall.clientLeft - spiderParams.height / 2;
  const maxHeight = wall.clientHeight - spiderParams.height;
  const maxWidth = wall.clientWidth - spiderParams.width;

  if (coordsX > maxWidth) {
    coordsX = maxWidth;
  } else if (coordsX < 0) {
    coordsX = 0;
  }

  if (coordsY > maxHeight) {
    coordsY = maxHeight;
  } else if (coordsY < 0) {
    coordsY = 0;
  }

  spider.style.top = `${coordsY}px`;
  spider.style.left = `${coordsX}px`;
});
