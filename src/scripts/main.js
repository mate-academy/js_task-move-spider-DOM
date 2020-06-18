'use strict';

const spider = document.querySelector('.spider');
const spiderPosition = spider.getBoundingClientRect();
const spiderX = spiderPosition.x;
const spiderY = spiderPosition.y;
const spiderWidth = spiderPosition.width;
const spiderHeight = spiderPosition.height;

document.addEventListener('click', e => {
  const target = e.target.closest('div');

  if (target) {
    const differenceX = e.clientX - spiderX - spiderWidth / 2;
    const differenceY = e.clientY - spiderY - spiderHeight / 2;

    differenceX >= 0
      ? spider.style.left = `${differenceX}px`
      : spider.style.right = `-${differenceX}px`;

    differenceY >= 0
      ? spider.style.top = `${differenceY}px`
      : spider.style.bottom = `-${differenceY}px`;
  }
});
