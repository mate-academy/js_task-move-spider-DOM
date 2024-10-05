'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  const positionY =
    e.clientY - wallSize.top - wall.clientTop - spiderSize.height / 2;
  const positionX =
    e.clientX - wallSize.left - wall.clientLeft - spiderSize.width / 2;

  if (
    !(
      positionY < 0 ||
      positionX < 0 ||
      positionY > wall.clientHeight - spider.clientHeight ||
      positionX > wall.clientWidth - spider.clientWidth
    )
  ) {
    spider.style.top = positionY + 'px';
    spider.style.left = positionX + 'px';
  }
});
