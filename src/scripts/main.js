'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallParameters = wall.getBoundingClientRect();

  const x = event.clientX - wallParameters.left - wall.clientLeft;
  const y = event.clientY - wallParameters.top - wall.clientTop;

  const spiderTop = y - spider.clientHeight / 2;
  const spiderLeft = x - spider.clientWidth / 2;

  const spiderRightMax = wall.clientWidth - spider.clientWidth;
  const spiderBottomMax = wall.clientHeight - spider.clientHeight;

  if (event.target.classList.contains('wall')) {
    spider.style.top = getSpiderCoords(spiderTop, spiderBottomMax);
    spider.style.left = getSpiderCoords(spiderLeft, spiderRightMax);
  }
});

function getSpiderCoords(actualCoord, maxCoord) {
  if (actualCoord > maxCoord) {
    return maxCoord + 'px';
  } else if (actualCoord < 0) {
    return 0;
  }

  return actualCoord + 'px';
}
