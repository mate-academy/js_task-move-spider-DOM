'use strict';

function css(element, style) {
  for (const property in style) {
    element.style[property] = style[property];
  }
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const _isAxisX = (axis) => axis === 'x';
const maxCoordinates = {
  minX: 0,
  maxX: wall.clientWidth - spider.width,

  minY: 0,
  maxY: wall.clientHeight - spider.height,
};

function validateAxisValue(axis, value) {
  const { minX, maxX, minY, maxY } = maxCoordinates;
  const isAxisX = _isAxisX(axis);

  const result = isAxisX ? {
    isCorrect: minX <= value && value <= maxX,
  } : {
    isCorrect: minY <= value && value <= maxY,
  };

  if (!result.isCorrect) {
    return {
      ...result,
      newCoordinate: isAxisX
        ? value < minX ? minX : maxX // new X coordinate
        : value < minY ? minY : maxY, // new Y coordinate
    };
  }

  return result;
}

document.addEventListener('click', e => {
  const clickedArea = e.target.closest('.wall');

  if (!clickedArea) {
    return;
  }

  const { clientX, clientY } = e;
  const clickCoordinates = {
    x: clientX,
    y: clientY,
  };

  const limitX = (wall.offsetLeft + wall.clientLeft) + (spider.width / 2);
  const limitY = (wall.offsetTop + wall.clientTop) + (spider.height / 2);
  const newCoordinates = {
    x: clickCoordinates.x - limitX,
    y: clickCoordinates.y - limitY,
  };

  Object.entries(newCoordinates).forEach(([axis, value]) => {
    const axisValidator = validateAxisValue(axis, value);

    if (!axisValidator.isCorrect) {
      newCoordinates[axis] = axisValidator.newCoordinate;
    }
  });

  css(spider, {
    left: `${newCoordinates.x}px`,
    top: `${newCoordinates.y}px`,
  });
});
