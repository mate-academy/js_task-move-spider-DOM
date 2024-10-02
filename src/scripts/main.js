'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  if (e.target === wall) {
    if (e.clientY <= wall.offsetTop + wall.clientTop + spiderHeight / 2) {
      spider.style.top = 0 + 'px';
    } else if (
      e.clientY >=
      wall.offsetTop + wall.clientTop + wallHeight - spiderHeight / 2
    ) {
      spider.style.top = wallHeight - spiderHeight + 'px';
    } else {
      spider.style.top =
        e.clientY - wall.offsetTop - wall.clientTop - spiderHeight / 2 + 'px';
    }

    if (e.clientX <= wall.offsetLeft + wall.clientLeft + spiderWidth / 2) {
      spider.style.left = 0 + 'px';
    } else if (
      e.clientX >=
      wall.offsetLeft + wall.clientLeft + wallWidth - spiderWidth / 2
    ) {
      spider.style.left = wallWidth - spiderWidth + 'px';
    } else {
      spider.style.left =
        e.clientX - wall.offsetLeft - wall.clientLeft - spiderHeight / 2 + 'px';
    }
  }
});
