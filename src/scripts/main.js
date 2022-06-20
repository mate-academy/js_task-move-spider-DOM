'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallStyles = window.getComputedStyle(wall);
  const borderWidth = parseInt(wallStyles.borderWidth);

  if (!e.target.closest('.wall')) {
    return;
  }

  let x = e.clientX - wall.offsetLeft - spider.width / 2 - borderWidth;
  let y = e.clientY - wall.offsetTop - spider.height / 2 - borderWidth;

  if (x < 0) {
    x = 0;
  } else if (x + spider.width > wall.clientWidth) {
    x = wall.clientWidth - spider.width;
  }

  if (y < 0) {
    y = 0;
  } else if (y + spider.height > wall.clientHeight) {
    y = wall.clientHeight - spider.height;
  }

  spider.style = `left: ${x}px; top: ${y}px`;
});
