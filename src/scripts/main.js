'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.matches('.wall')) {
    return;
  }

  let newTop = e.clientY - wall.offsetTop - spider.offsetHeight / 2;

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > wall.clientHeight - spider.offsetHeight) {
    newTop = wall.clientHeight - spider.offsetHeight;
  }

  let newLeft = e.clientX - wall.offsetLeft - spider.offsetWidth / 2;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > wall.clientWidth - spider.offsetWidth) {
    newLeft = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
