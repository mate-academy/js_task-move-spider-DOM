'use strict';
const wall = document.querySelector('.wall')
const spider = document.querySelector('.spider')
document.addEventListener('click', e => {

  if(e.target === spider.offsetParent) {
    if (e.offsetX < spider.offsetWidth / 2) {
      spider.style.left = 0 + 'px';
    } else if (e.offsetX > wall.clientWidth - spider.offsetWidth / 2) {
      spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
    } else {
      spider.style.left = e.clientX
      - wall.getBoundingClientRect().left
      - wall.clientLeft
      - (spider.offsetWidth / 2) + 'px';
    }

    if (e.offsetY < spider.offsetHeight / 2) {
      spider.style.top = 0 + 'px';
    }else if (e.offsetY > wall.clientHeight - spider.offsetHeight / 2) {
      spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
    } else {
      spider.style.top = e.clientY
      - wall.getBoundingClientRect().top
      - wall.clientTop
      - (spider.offsetHeight / 2) + 'px';
    }
  }

});
