'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.closest('.wall')) {
    return;
  };

  let x = e.clientX - wall.offsetLeft - spider.width / 2;

  let y = e.clientY - wall.offsetTop - spider.height / 2;

  if (x < 0) {
    x = 0;
  } else if (x > wall.clientWidth - spider.width) {
    x = wall.clientWidth - spider.width;
  }

  if (y < 0) {
    y = 0;
  } else if (y > wall.clientHeight - spider.height) {
    y = wall.clientHeight - spider.height;
  }

  spider.style = `top: ${y}px; left: ${x}px`;
});
