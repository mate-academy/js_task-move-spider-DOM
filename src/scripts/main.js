'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  function calculateSpiderPosition() {
    const spiderPosition = {
      topCoord: e.clientY - wall.offsetTop - spider.offsetHeight / 2,
      leftCoord: e.clientX - wall.offsetLeft - spider.offsetWidth / 2,
    };

    if (spiderPosition.leftCoord < 0) {
      spiderPosition.leftCoord = 0;
    } else if (
      spiderPosition.leftCoord + spider.offsetWidth >
      wall.clientWidth
    ) {
      spiderPosition.leftCoord = wall.clientWidth - spider.offsetWidth;
    }

    if (spiderPosition.topCoord < 0) {
      spiderPosition.topCoord = 0;
    } else if (
      spiderPosition.topCoord + spider.offsetHeight >
      wall.clientHeight
    ) {
      spiderPosition.topCoord = wall.clientHeight - spider.offsetHeight;
    }

    return spiderPosition;
  }

  const { topCoord, leftCoord } = calculateSpiderPosition();

  spider.style.top = `${topCoord}px`;
  spider.style.left = `${leftCoord}px`;
});
