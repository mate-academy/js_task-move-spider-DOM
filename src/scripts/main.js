'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderSize = spider.getBoundingClientRect();
  const wallSize = wall.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let newTop =
      e.clientY - wallSize.top - wall.clientTop - spiderSize.height / 2;
    let newLeft =
      e.clientX - wallSize.left - wall.clientLeft - spiderSize.width / 2;

    newTop = Math.max(
      0,
      Math.min(newTop, wall.clientHeight - spider.clientHeight),
    );

    newLeft = Math.max(
      0,
      Math.min(newLeft, wall.clientWidth - spider.clientWidth),
    );

    spider.style.top = `${newTop}px`;
    spider.style.left = `${newLeft}px`;
  }
});
