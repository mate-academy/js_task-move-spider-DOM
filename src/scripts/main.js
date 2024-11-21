'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHight = wall.clientHeight;
const wallWidth = wall.clientWidth;
const spiderHight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const calculatePosition = (value, maxSize, elementSize) => {
  return Math.max(0, Math.min(maxSize - elementSize, value));
};

document.addEventListener('click', (e) => {
  const wallElem = e.target.closest('.wall');

  if (wallElem) {
    const top1 =
      e.clientY - wallElem.getBoundingClientRect().y - spiderHight / 2;
    const left1 =
      e.clientX - wallElem.getBoundingClientRect().x - spiderWidth / 2;

    spider.style.top = `${calculatePosition(top1, wallHight, spiderHight)}px`;
    spider.style.left = `${calculatePosition(left1, wallWidth, spiderWidth)}px`;
  }
});
