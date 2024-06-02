'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const getWithinRange = (value, minValue, maxValue) => {
  const newValue = Math.max(minValue, value);

  return Math.min(newValue, maxValue);
};

document.addEventListener('click', (e) => {
  const spiderTop = getWithinRange(
    e.clientY - wall.offsetTop - wall.clientTop - spider.clientHeight / 2,
    0,
    wall.clientHeight - spider.clientHeight,
  );

  const spiderLeft = getWithinRange(
    e.clientX - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2,
    0,
    wall.clientWidth - spider.clientWidth,
  );

  if (e.target === wall) {
    spider.style.top = `${spiderTop}px`;
    spider.style.left = `${spiderLeft}px`;
  }
});
