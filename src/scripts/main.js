'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const onWindowClick = (e) => {
  if (e.target !== wall) {
    return;
  }

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const xCoord = Math.min(
    Math.max(
      e.clientX - wall.offsetLeft - wall.clientLeft - spiderWidth / 2,
      0,
    ),
    wall.clientWidth - spiderWidth,
  );
  const yCoord = Math.min(
    Math.max(e.clientY - wall.offsetTop - wall.clientTop - spiderHeight / 2, 0),
    wall.clientHeight - spiderHeight,
  );

  spider.style.left = `${xCoord}px`;
  spider.style.top = `${yCoord}px`;
};

document.addEventListener('click', onWindowClick);
