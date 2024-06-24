'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    const spiderHalfWidth = spider.clientWidth / 2;
    const spiderHalfHeight = spider.clientHeight / 2;

    let newX = e.clientX - wall.clientLeft - wall.offsetLeft - spiderHalfWidth;
    let newY = e.clientY - wall.clientTop - wall.offsetTop - spiderHalfHeight;

    if (newX > maxX) {
      newX = maxX;
    }

    if (newX < 0) {
      newX = 0;
    }

    if (newY < 0) {
      newY = 0;
    }

    if (newY > maxY) {
      newY = maxY;
    }

    spider.style.left = `${newX}px`;
    spider.style.top = `${newY}px`;
  }
});
