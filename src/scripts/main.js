'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const posX = e.clientX;
  const posY = e.clientY;
  const offsetTop = wall.offsetTop;
  const offsetLeft = wall.offsetLeft;
  const clientHeight = wall.clientHeight;
  const clientWidth = wall.clientWidth;
  const clientTop = wall.clientTop;
  const clientLeft = wall.clientLeft;
  const spider = document.body.querySelector('.spider');
  const spiderSize = spider.clientHeight;

  spider.style.top = `${calculatePosition(posY, offsetTop, clientHeight, clientTop, spiderSize)}px`;
  spider.style.left = `${calculatePosition(posX, offsetLeft, clientWidth, clientLeft, spiderSize)}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});

function calculatePosition(cPosition, elFromEdge, elSize, elBorder, sSize) {
  const positionInitial = elFromEdge + elBorder + Math.ceil(sSize / 2);
  const positionEnd = positionInitial + elSize - sSize;
  let positionToReturn = cPosition;

  if (positionToReturn < positionInitial) {
    positionToReturn = positionInitial;
  }

  if (positionToReturn > positionEnd) {
    positionToReturn = positionEnd;
  }

  return positionToReturn - elFromEdge - elBorder;
}
