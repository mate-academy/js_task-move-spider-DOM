'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const rect = wall.getBoundingClientRect();
  const spiderXcenter = spider.clientWidth / 2;
  const spiderYcenter = spider.clientHeight / 2;
  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  let leftPosition = e.clientX - rect.left - wall.clientLeft - spiderXcenter;
  let topPosition = e.clientY - rect.top - wall.clientTop - spiderYcenter;

  if (!wall.contains(e.target)) {
    return;
  }

  if (leftPosition < 0) {
    leftPosition = 0;
  }

  if (leftPosition > maxLeft) {
    leftPosition = maxLeft;
  }

  if (topPosition < 0) {
    topPosition = 0;
  }

  if (topPosition > maxTop) {
    topPosition = maxTop;
  }

  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});
