'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spiderSize = spider.getBoundingClientRect();
  const wallSize = getComputedStyle(wall);
  let topPosition = e.offsetY - (spiderSize.height / 2);
  let leftPosition = e.offsetX - (spiderSize.width / 2);

  if (e.target.classList.contains('spider')) {
    return;
  }

  if (topPosition < 0) {
    topPosition = 0;
  }

  if (e.offsetY + spiderSize.height > parseInt(wallSize.height)) {
    topPosition = parseInt(wallSize.height) - spiderSize.height;
  }

  if (leftPosition < 0) {
    leftPosition = 0;
  }

  if (e.offsetX + spiderSize.width > parseInt(wallSize.width)) {
    leftPosition = parseInt(wallSize.width) - spiderSize.width;
  }

  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});
