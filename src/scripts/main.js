'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderHeight = spider.height / 2;
const spiderWidth = spider.width / 2;
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

document.addEventListener('click', e => {
  const calcWidth = e.clientX - wall.offsetLeft - wall.clientLeft - spiderWidth;
  const calcHeight = e.clientY - wall.offsetTop - wall.clientTop - spiderHeight;

  const maxWidth = calcWidth < 0
    ? 0
    : calcWidth > wallWidth - spiderWidth * 2
      ? wallWidth - spiderWidth * 2
      : calcWidth;

  const maxHeight = calcHeight < 0
    ? 0
    : calcHeight > wallHeight - spiderHeight * 2
      ? wallHeight - spiderHeight * 2
      : calcHeight;

  spider.style.left = `${maxWidth}px`;
  spider.style.top = `${maxHeight}px`;
});
