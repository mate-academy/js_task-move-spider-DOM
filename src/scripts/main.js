'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  if (e.offsetX <= spider.clientWidth) {
    spider.style.left = `${spider.clientWidth / 2}px`;
  } else if (e.offsetX < wall.clientWidth - spider.clientWidth) {
    spider.style.left = `${e.offsetX}px`;
  } else {
    spider.style.left = `${wall.clientWidth - spider.clientWidth / 2}px`;
  }

  if (e.offsetY <= spider.clientHeight) {
    spider.style.top = `${spider.clientHeight / 2}px`;
  } else if (e.offsetY < wall.clientHeight - spider.clientHeight) {
    spider.style.top = `${e.offsetY}px`;
  } else {
    spider.style.top = `${wall.clientHeight - spider.clientHeight / 2}px`;
  }

  spider.style.transform = 'translate(-50%, -50%)';
});
