'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const halfSpiderHeight = spider.offsetHeight / 2;
  const halfSpiderWidth = spider.offsetWidth / 2;

  if (e.target !== wall) {
    return;
  }

  spider.style.top = `
    ${e.clientY - wall.offsetTop - halfSpiderHeight - 10}px`;

  spider.style.left = `
    ${e.clientX - wall.offsetLeft - halfSpiderWidth - 10}px`;

  if (e.offsetX < halfSpiderWidth) {
    spider.style.left = '0px';
  };

  if (e.offsetY < halfSpiderHeight) {
    spider.style.top = '0px';
  };

  if (e.offsetX > wall.clientWidth - halfSpiderWidth) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  };

  if (e.offsetY > wall.clientHeight - halfSpiderHeight) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
  };
});
