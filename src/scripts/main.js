'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (event) => {
  if (event.target !== wall) {
    return;
  }

  let spiderTop = event.offsetY - spider.clientHeight / 2;
  let spiderLeft = event.offsetX - spider.clientWidth / 2;

  if (event.offsetY < spider.clientHeight / 2) {
    spiderTop = 0;
  } else if (event.offsetY > (wall.clientHeight - spider.clientHeight)) {
    spiderTop = wall.clientHeight - spider.clientHeight;
  }

  if (event.offsetX < spider.clientWidth / 2) {
    spiderLeft = 0;
  } else if (event.offsetX > wall.clientWidth - spider.clientWidth) {
    spiderLeft = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = spiderTop + `px`;
  spider.style.left = spiderLeft + `px`;
});
