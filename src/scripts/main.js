'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  const wall = document.querySelector('.wall');

  const shiftLeft = wall.getBoundingClientRect().left + wall.borderWidth;

  const shiftTop = wall.getBoundingClientRect().top + wall.borderWidth;

  const spiderWidth = spider.clientWidth;

  const spiderHeight = spider.clientHeight;

  if (!e.target.classList.contains('wall')) {
    return false;
  }

  if (e.clientX < shiftLeft || e.clientY < shiftTop) {
    return false;
  }

  if (e.clientX > shiftLeft + wall.clientWidth
    || e.clientY > shiftTop + wall.clientHeight) {
    return false;
  }

  if (e.clientX < shiftLeft + spiderWidth / 2) {
    spider.style.left = `0px`;
  }

  if (e.clientY < shiftTop + spiderHeight / 2) {
    spider.style.top = `0px`;
  }

  if (e.clientX > shiftLeft + wall.clientWidth - spiderWidth / 2) {
    spider.style.left = `${wall.clientWidth - spiderWidth}px`;
  }

  if (e.clientY > shiftTop + wall.clientHeight - spiderHeight / 2) {
    spider.style.top = `${wall.clientHeight - spiderHeight}px`;
  }

  if (e.clientX > shiftLeft + spiderWidth / 2
    && e.clientX < shiftLeft + wall.clientWidth - spiderWidth / 2) {
    spider.style.left = `${e.clientX - shiftLeft - spiderWidth / 2}px`;
  }

  if (e.clientY > shiftTop + spiderHeight / 2
    && e.clientY < shiftTop + wall.clientHeight - spiderHeight / 2) {
    spider.style.top = `${e.clientY - shiftTop - spiderHeight / 2}px`;
  }
});
