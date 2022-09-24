'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.classList.contains('wall')) {
    return;
  }

  const wallOffsetX = wall.offsetLeft + wall.clientLeft;
  const wallOffsetY = wall.offsetTop + wall.clientTop;

  switch (true) {
    case (e.clientX - wallOffsetX - spider.offsetWidth < 0):
      spider.style.left = '0px';
      break;
    case (e.clientX - wallOffsetX > wall.clientWidth - spider.offsetWidth):
      spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
      break;
    default:
      spider.style.left =
        e.clientX - wallOffsetX - (spider.offsetWidth / 2) + 'px';
  }

  switch (true) {
    case (e.clientY - wallOffsetY - spider.offsetHeight < 0):
      spider.style.top = '0px';
      break;
    case (e.clientY - wallOffsetY > wall.clientHeight - spider.offsetHeight):
      spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
      break;
    default:
      spider.style.top = 
        e.clientY - wallOffsetY - (spider.clientHeight / 2) + 'px';
  }
});
