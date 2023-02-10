'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const target = e.target.closest('.wall');

  if (!target || e.target.classList.contains('spider')) {
    return;
  }

  let coordY = e.clientY - wall.offsetTop - wall.clientTop
    - spider.offsetHeight / 2;

  const coordX = e.clientX - wall.offsetLeft - wall.clientLeft
    - spider.offsetWidth / 2;

  const widthDiff = wall.clientWidth - spider.offsetWidth;
  const heightDiff = wall.clientHeight - spider.offsetHeight;

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;

  if (document.documentElement.clientHeight < wall.offsetHeight) {
    coordY += document.documentElement.scrollTop;
    spider.style.top = `${coordY}px`;
  }

  if (coordY < 0) {
    spider.style.top = '0px';
  }

  if (coordY > heightDiff) {
    spider.style.top = `${heightDiff}px`;
  }

  if (coordX < 0) {
    spider.style.left = '0px';
  }

  if (coordX > widthDiff) {
    spider.style.left = `${widthDiff}px`;
  }
});
