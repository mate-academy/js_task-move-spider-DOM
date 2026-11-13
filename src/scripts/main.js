'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

spider.style.position = 'absolute';

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

document.addEventListener('click', (e) => {
  // write code here
  const wallRect = wall.getBoundingClientRect();

  const wallLeft = wallRect.left + wall.clientLeft;
  const wallTop = wallRect.top + wall.clientTop;

  const spiderLeft = e.clientX - spiderWidth / 2;
  const spiderTop = e.clientY - spiderHeight / 2;

  if (
    e.clientX >= wallRect.left &&
    e.clientX <= wallRect.right &&
    e.clientY >= wallRect.top &&
    e.clientY <= wallRect.bottom
  ) {
    const spiderX = Math.max(
      0,
      Math.min(spiderLeft - wallLeft, wall.clientWidth - spiderWidth),
    );

    const spiderY = Math.max(
      0,
      Math.min(spiderTop - wallTop, wall.clientHeight - spiderHeight),
    );

    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  }
});
