'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target === wall) {
    let newX = e.clientX - wall.getBoundingClientRect().left
      - wall.clientLeft - (spider.clientWidth / 2);
    let newY = e.clientY - wall.getBoundingClientRect().top
      - wall.clientTop - (spider.clientHeight / 2);

    if (newX <= 0) {
      newX = 0;
    }

    if (
      newX >= wall.clientWidth - (spider.clientWidth / 2) - wall.clientLeft * 2
    ) {
      newX = wall.clientWidth - spider.clientWidth;
    }

    if (newY <= 0) {
      newY = 0;
    }

    if (
      newY >= wall.clientHeight - (spider.clientWidth / 2) - wall.clientTop * 2
    ) {
      newY = wall.clientHeight - spider.clientWidth;
    }

    spider.style.transform = `translate(${newX}px, ${newY}px)`;
  }
});
