'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallStyle = window.getComputedStyle(wall);
  const borderWidth = parseInt(wallStyle.borderWidth);
  const centerSpiderField = spider.clientHeight / 2;

  if (e.target === wall) {
    let xCoord = e.clientX
     - wall.offsetLeft - centerSpiderField - borderWidth;
    let yCoord = e.clientY - wall.offsetTop - centerSpiderField - borderWidth;

    if (xCoord < 0) {
      xCoord = 0;
    }

    if (xCoord + spider.clientWidth > wall.clientWidth) {
      xCoord = wall.clientWidth - spider.clientWidth;
    }

    if (yCoord < 0) {
      yCoord = 0;
    }

    if (yCoord + spider.clientHeight > wall.clientHeight) {
      yCoord = wall.clientHeight - spider.clientHeight;
    }

    spider.style.left = xCoord + 'px';
    spider.style.top = yCoord + 'px';
  }
});
