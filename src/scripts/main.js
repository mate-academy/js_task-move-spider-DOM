'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className === 'wall') {
    const spiderImg = e.target.firstElementChild;
    const position = {
      x: calculatingPosition(
        e.offsetX,
        spiderImg.clientWidth,
        e.target.clientWidth,
      ),
      y: calculatingPosition(
        e.offsetY,
        spiderImg.clientHeight,
        e.target.clientHeight,
      ),
    };

    spiderImg.style.cssText = `
      left: ${position.x}px;
      top: ${position.y}px;
    `;
  }
});

function calculatingPosition(offset, childSize, parentSize) {
  let position = offset;
  const childSizeHalf = childSize / 2;
  const extremum = {
    min: childSizeHalf,
    max: parentSize - childSizeHalf,
  };

  if (position < extremum.min) {
    position = extremum.min;
  }

  if (position > extremum.max) {
    position = extremum.max;
  }

  return position - childSizeHalf;
}
