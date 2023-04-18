'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

wallElement.addEventListener('click', e => {
  const game = {
    coords: {
      x: e.clientX - e.target.getBoundingClientRect().x - e.target.clientTop,
      y: e.clientY - e.target.getBoundingClientRect().y - e.target.clientLeft,
    },
    spider: {
      width: spiderElement.offsetWidth,
      height: spiderElement.offsetHeight,
    },
    wall: {
      width: wallElement.offsetWidth - e.target.clientLeft * 2,
      height: wallElement.offsetHeight - e.target.clientTop * 2,
    },
  };

  const { coords, spider, wall } = game;

  if (coords.x <= spider.width / 2) {
    coords.x = 0;
  } else if (coords.x > wall.width - spider.width / 2) {
    coords.x = wall.width - spider.width;
  } else {
    coords.x = coords.x - spider.width / 2;
  }

  if (coords.y <= spider.height / 2) {
    coords.y = 0;
  } else if (coords.y > wall.height - spider.height / 2) {
    coords.y = wall.height - spider.height;
  } else {
    coords.y = coords.y - spider.height / 2;
  }

  spiderElement.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
});
