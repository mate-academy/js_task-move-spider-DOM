'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const target = e.target.closest('.wall');

  const coordY = e.clientY - wall.offsetTop - wall.clientTop
    - spider.offsetHeight / 2;

  const coordX = e.clientX - wall.offsetLeft - wall.clientLeft
    - spider.offsetWidth / 2;

  if (!target || e.target.classList.contains('spider')) {
    return;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;

  if (coordY < 0) {
    spider.style.top = '0px';
  }

  if (coordY > (wall.clientHeight - spider.offsetHeight)) {
    spider.style.top = `${wall.clientHeight - spider.offsetHeight}px`;
  }

  if (coordX < 0) {
    spider.style.left = '0px';
  }

  if (coordX > (wall.clientWidth - spider.offsetWidth)) {
    spider.style.left = `${wall.clientWidth - spider.offsetWidth}px`;
  }
});
