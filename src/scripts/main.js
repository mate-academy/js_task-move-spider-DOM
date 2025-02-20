'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (!wall || !spider) {
  // eslint-disable-next-line no-console
  console.error('Wall or spider element not found!');
} else {
  wall.addEventListener('click', (e) => {
    const wallCoords = wall.getBoundingClientRect();
    const height = spider.clientHeight / 2;
    const width = spider.clientWidth / 2;

    let tops = e.clientY - wallCoords.top - wall.clientTop - height;
    let lefts = e.clientX - wallCoords.left - wall.clientLeft - width;

    tops = Math.max(0, Math.min(tops, wall.clientHeight - spider.clientHeight));
    lefts = Math.max(0, Math.min(lefts, wall.clientWidth - spider.clientWidth));

    spider.style.top = `${tops}px`;
    spider.style.left = `${lefts}px`;
  });
}
