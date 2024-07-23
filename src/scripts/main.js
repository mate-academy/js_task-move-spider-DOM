'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const target = e.target;

  if (target.classList.contains('wall')) {
    const wallRect = wall.getBoundingClientRect();

    const wallLeft = wallRect.left + window.scrollX;
    const wallTop = wallRect.top + window.scrollY;

    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    let positionLeft = e.clientX - wallLeft - spiderWidth / 2 - wall.clientLeft;
    let positionTop = e.clientY - wallTop - spiderHeight / 2 - wall.clientTop;

    const maxX = wall.clientWidth - spiderWidth;
    const maxY = wall.clientHeight - spiderHeight;

    if (positionLeft < 0) {
      positionLeft = 0;
    } else if (positionLeft > maxX) {
      positionLeft = maxX;
    }

    if (positionTop < 0) {
      positionTop = 0;
    } else if (positionTop > maxY) {
      positionTop = maxY;
    }

    spider.style.left = `${positionLeft}px`;
    spider.style.top = `${positionTop}px`;
  }
});
