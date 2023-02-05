'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  let leftValue = e.pageX - wall.offsetLeft - wall.clientLeft;
  let topValue = e.pageY - wall.offsetTop - wall.clientTop;
  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  if (leftValue < wall.clientLeft + spiderHalfWidth) {
    leftValue = spiderHalfWidth;
  }

  if (leftValue > wall.clientWidth - spiderHalfWidth) {
    leftValue = wall.clientWidth - spiderHalfWidth;
  }

  if (topValue < wall.clientTop + spiderHalfHeight) {
    topValue = spiderHalfHeight;
  }

  if (topValue > wall.clientHeight - spiderHalfHeight) {
    topValue = wall.clientHeight - spiderHalfHeight;
  }

  spider.style.position = 'absolute';
  spider.style.left = `${leftValue}px`;
  spider.style.top = `${topValue}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
