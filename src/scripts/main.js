'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (wall) {
    wall.style.position = 'relative';
    spider.style.position = 'absolute';

    const rect = wall.getBoundingClientRect();
    const spiderWidth = spider.getBoundingClientRect().width;
    const spiderHeight = spider.getBoundingClientRect().height;
    const calculatedLeft =
      e.clientX - rect.left - spiderWidth / 2 - wall.clientLeft;
    const calculatedTop =
      e.clientY - rect.top - spiderHeight / 2 - wall.clientTop;

    spider.style.left = `${Math.min(Math.max(calculatedLeft, 0), wall.clientWidth - spiderWidth)}px`;
    spider.style.top = `${Math.min(Math.max(calculatedTop, 0), wall.clientHeight - spiderHeight)}px`;
  }
});
