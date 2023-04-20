'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

wallElement.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('spider')) {
    return;
  }

  const game = {
    coords: {
      x: clickEvent.clientX
        - clickEvent.target.getBoundingClientRect().x
        - clickEvent.target.clientTop,
      y: clickEvent.clientY
        - clickEvent.target.getBoundingClientRect().y
        - clickEvent.target.clientLeft,
    },
    spider: {
      width: spiderElement.offsetWidth,
      height: spiderElement.offsetHeight,
    },
    wall: {
      width: wallElement.offsetWidth - clickEvent.target.clientLeft * 2,
      height: wallElement.offsetHeight - clickEvent.target.clientTop * 2,
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
