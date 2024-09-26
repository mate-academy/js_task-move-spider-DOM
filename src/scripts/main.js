'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || e.target === spider) {
    return;
  }

  const wallPosition = wall.getBoundingClientRect();

  // In this case we can make our code shorter in two times (cuz we have square)
  // But the code should work with spiders and walls of any sizes && proportions
  const spiderHalfHeight = spider.offsetHeight / 2;
  const spiderHalfWidth = spider.offsetWidth / 2;

  let spiderXPosition = e.offsetX - spiderHalfWidth;
  let spiderYPosition = e.offsetY - spiderHalfHeight;

  const topBorder = wallPosition.top + wall.clientTop + spiderHalfHeight;
  const bottomBorder = wallPosition.bottom - wall.clientTop - spiderHalfHeight;
  const leftBorder = wallPosition.left + wall.clientLeft + spiderHalfWidth;
  const rightBorder = wallPosition.right - wall.clientLeft - spiderHalfWidth;

  if (e.clientY < topBorder) {
    spiderYPosition = 0;
  }

  if (e.clientY > bottomBorder) {
    spiderYPosition = wall.clientHeight - spider.offsetHeight;
  }

  if (e.clientX < leftBorder) {
    spiderXPosition = 0;
  }

  if (e.clientX > rightBorder) {
    spiderXPosition = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.top = spiderYPosition + 'px';
  spider.style.left = spiderXPosition + 'px';
});
