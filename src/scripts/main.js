'use strict';

document.addEventListener('click', (e) => {
  // write code here
  if (!e.target.closest('.wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallRect = wall.getBoundingClientRect();
  const leftPosition = e.clientX - wallRect.left - wall.clientLeft;
  const topPosition = e.clientY - wallRect.top - wall.clientTop;

  spider.style.left =
    getCenteredPosition(leftPosition, spiderWidth, wall.clientWidth) + 'px';

  spider.style.top =
    getCenteredPosition(topPosition, spiderHeight, wall.clientHeight) + 'px';
});

const getCenteredPosition = function (position, value, wallSize) {
  const maxPosition = wallSize - value;
  const centeredPosition = position - value / 2;

  if (centeredPosition < 0) {
    return 0;
  }

  if (centeredPosition > maxPosition) {
    return maxPosition;
  }

  return centeredPosition;
};
