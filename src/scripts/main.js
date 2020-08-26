'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (event) => {
  const top = event.offsetY - (spider.height / 2);
  const left = event.offsetX - (spider.width / 2);
  const maxHeight = wall.clientHeight - spider.height;
  const maxWidth = wall.clientWidth - spider.width;

  spider.style.top = (top < 0) ? '0px'
    : (top > maxHeight) ? `${maxHeight}px`
      : `${top}px`;

  spider.style.left = (left < 0) ? '0px'
    : (left > maxWidth) ? `${maxWidth}px`
      : `${left}px`;
});
