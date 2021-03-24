'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', ev => {
  let xPosition
    = ev.clientX
    - wall.getBoundingClientRect().left
    - (spider.clientWidth / 2);
  let yPosition
    = ev.clientY
    - wall.getBoundingClientRect().top
    - (spider.clientHeight / 2);

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  if (xPosition + spider.clientWidth > wall.clientWidth) {
    xPosition = wall.clientWidth - spider.clientWidth;
  }

  if (yPosition + spider.clientWidth > wall.clientWidth) {
    yPosition = wall.clientWidth - spider.clientWidth;
  }

  spider.style.left = xPosition + 'px';
  spider.style.top = yPosition + 'px';
});
