'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const minX = wall.getBoundingClientRect().left;
  const maxX = wall.getBoundingClientRect().right;
  const minY = wall.getBoundingClientRect().top;
  const maxY = wall.getBoundingClientRect().bottom;

  if (e.clientX >= minX && e.clientX <= maxX
    && e.clientY >= minY && e.clientY <= maxY) {
    let coordX = e.clientX - minX - wall.clientLeft - spider.clientWidth / 2;
    let coordY = e.clientY - minY - wall.clientTop - spider.clientHeight / 2;

    if (e.clientX < minX + wall.clientLeft + spider.clientWidth / 2) {
      coordX = 0;
    }

    if (e.clientY < minY + wall.clientTop + spider.clientHeight / 2) {
      coordY = 0;
    }

    if (e.clientX > maxX - wall.clientLeft - spider.clientWidth / 2) {
      coordX = maxX - minX - wall.clientLeft * 2 - spider.clientWidth;
    }

    if (e.clientY > maxY - wall.clientTop - spider.clientHeight / 2) {
      coordY = maxY - minY - wall.clientLeft * 2 - spider.clientWidth;
    }
    spider.style.top = `${coordY}px`;
    spider.style.left = `${coordX}px`;
  };
});
