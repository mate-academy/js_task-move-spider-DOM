'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  e.preventDefault();

  if (e.target.tagName !== 'DIV') {
    return;
  };

  let coordsLeft = e.clientX - wall.getBoundingClientRect().left
  - wall.clientLeft - spider.clientWidth / 2;
  let coordsTop = e.clientY - wall.getBoundingClientRect().top
  - wall.clientTop - spider.clientHeight / 2;

  if (coordsLeft < 0) {
    coordsLeft = 0;
  };

  if (coordsTop < 0) {
    coordsTop = 0;
  };

  if (coordsLeft + spider.clientWidth > wall.clientWidth) {
    coordsLeft = wall.clientWidth - spider.clientWidth;
  };

  if (coordsTop + spider.clientWidth > wall.clientWidth) {
    coordsTop = wall.clientWidth - spider.clientWidth;
  };

  spider.style.top = `${coordsTop}px`;
  spider.style.left = `${coordsLeft}px`;
});
