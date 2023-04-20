'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const halfWidth = spider.offsetWidth / 2;
  const halfHeigth = spider.offsetHeight / 2;

  if (e.target.className !== 'wall') {
    return;
  }

  spider.style.top = `${e.offsetY - halfWidth}px`;
  spider.style.left = `${e.offsetX - halfHeigth}px`;

  if (e.offsetX < halfWidth) {
    spider.style.left = 0;
  };

  if (e.offsetY < halfHeigth) {
    spider.style.top = 0;
  };

  if (e.offsetX > wall.clientWidth - halfWidth) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  };

  if (e.offsetY > wall.clientHeight - halfHeigth) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
  };
});
