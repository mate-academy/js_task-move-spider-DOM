'use strict';
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;
 
  let topPosition = clickY - (spiderRect.height / 2);
  let leftPosition = clickX - (spiderRect.width / 2);

  if (topPosition < 0) {
    topPosition = 0;
  } else if (topPosition + spiderRect.height > wallRect.height) {
    topPosition = wallRect.height - spiderRect.height;
  }

  if (leftPosition  < 0) {
    leftPosition = 0;
  } else if (leftPosition + spiderRect.width > wallRect.width) {
    leftPosition = wallRect.width - spiderRect.width;
  }

  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});
