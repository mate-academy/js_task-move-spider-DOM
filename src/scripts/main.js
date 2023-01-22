'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  let leftValue = e.pageX - wall.offsetLeft - wall.clientLeft;
  let topValue = e.pageY - wall.offsetTop - wall.clientTop;

  if (leftValue < wall.clientLeft + spider.offsetWidth / 2) {
    leftValue = spider.offsetWidth / 2;
  }

  if (leftValue > wall.clientWidth - spider.offsetWidth / 2) {
    leftValue = wall.clientWidth - spider.offsetWidth / 2;
  }

  if (topValue < wall.clientTop + spider.offsetHeight / 2) {
    topValue = spider.offsetHeight / 2;
  }

  if (topValue > wall.clientHeight - spider.offsetWidth / 2) {
    topValue = wall.clientHeight - spider.offsetHeight / 2;
  }

  spider.style.position = 'absolute';
  spider.style.left = `${leftValue}px`;
  spider.style.top = `${topValue}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
