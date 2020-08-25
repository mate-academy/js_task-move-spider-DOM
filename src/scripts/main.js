'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('img');

  const item = e.target;

  if (!item.classList.contains('wall')) {
    return;
  }

  spider.style.top = `${e.offsetY - (spider.offsetHeight / 2)}px`;
  spider.style.left = `${e.offsetX - (spider.offsetWidth / 2)}px`;

  if (e.offsetY > (400 - spider.offsetHeight)) {
    spider.style.top = `${400 - spider.offsetHeight}px`;
  }

  if (e.offsetY < 0) {
    spider.style.top = `${0}px`;
  }

  if (e.offsetX > (400 - spider.offsetWidth)) {
    spider.style.left = `${400 - spider.offsetWidth}px`;
  }

  if (e.offsetX < 0) {
    spider.style.left = `${0}px`;
  }
});
