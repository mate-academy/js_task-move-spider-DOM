'use strict';

document.addEventListener('click', (e) => {
  // write code here
  if (e.target.closest('.wall')) {
    const wallElement = document.querySelector('.wall');
    const wallElementWith = wallElement.clientWidth;
    const wallElementHeight = wallElement.clientHeight;
    const wallElementRect = wallElement.getBoundingClientRect();
    const wallElementTopCoordinate = wallElementRect.y + wallElement.clientTop;
    const wallElementLeftCoordinate =
      wallElementRect.x + wallElement.clientLeft;
    const spiderElement = document.querySelector('.spider');
    const spiderElementWith = spiderElement.clientWidth;
    const spiderElementHeight = spiderElement.clientHeight;

    let newTopCoordinate = e.clientY - spiderElementHeight / 2;
    let newLeftCoordinate = e.clientX - spiderElementWith / 2;

    if (newTopCoordinate < wallElementTopCoordinate) {
      newTopCoordinate = 0;
    } else if (
      newTopCoordinate + spiderElementHeight >
      wallElementTopCoordinate + wallElementHeight
    ) {
      newTopCoordinate = wallElementHeight - spiderElementHeight;
    } else {
      newTopCoordinate = newTopCoordinate - wallElementTopCoordinate;
    }

    if (newLeftCoordinate < wallElementLeftCoordinate) {
      newLeftCoordinate = 0;
    } else if (
      newLeftCoordinate + spiderElementWith >
      wallElementLeftCoordinate + wallElementWith
    ) {
      newLeftCoordinate = wallElementWith - spiderElementWith;
    } else {
      newLeftCoordinate = newLeftCoordinate - wallElementLeftCoordinate;
    }

    spiderElement.style.top = newTopCoordinate + 'px';
    spiderElement.style.left = newLeftCoordinate + 'px';
  }
});
