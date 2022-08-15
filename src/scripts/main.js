/* eslint-disable no-console */
'use strict';

function css(element, style) {
  for (const property in style) {
    element.style[property] = style[property];
  }
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const body = document.querySelector('body');

const _isAxisX = (axis) => axis === 'x';
const maxCoordinates = {
  minX: 0,
  maxX: wall.clientWidth - spider.width,

  minY: 0,
  maxY: wall.clientHeight - spider.height,
};

function validateAxisValue(axis, value) {
  const isAxisX = _isAxisX(axis);

  const leftBorder = 0;
  const rightBorder = wall.clientWidth - spider.width;
  const topBorder = 0;
  const bottomBorder = wall.clientHeight - spider.height;

  const { minX, maxX, minY, maxY } = maxCoordinates;

  const result = isAxisX ? {
    isCorrect: leftBorder <= value && value <= rightBorder,
  } : {
    isCorrect: topBorder <= value && value <= bottomBorder,
  };

  if (!result.isCorrect) {
    return {
      ...result,
      newCoordinate: isAxisX
        ? value < 0 ? minX : maxX // new X coordinate
        : value < 0 ? minY : maxY, // new Y coordinate
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

  console.group('CLICK EVENT');
  console.group('Initial logs');
  console.log('clickCoordinates', clickCoordinates);

  console.log({
    wall,
    spider,
    body,
  });
  console.groupEnd();

  const limitX = (wall.offsetLeft + wall.clientLeft) + (spider.width / 2);
  const limitY = (wall.offsetTop + wall.clientTop) + (spider.height / 2);
  const newCoordinates = {
    x: clickCoordinates.x - limitX,
    y: clickCoordinates.y - limitY,
  };

  console.group('New data');

  console.log('Limits: ', {
    limitX,
    limitY,
  });
  console.log('newCoordinates BEFORE:', newCoordinates);

  Object.entries(newCoordinates).forEach(([axis, value]) => {
    const axisValidator = validateAxisValue(axis, value);

    if (!axisValidator.isCorrect) {
      console.warn(
        `The ${axis} is not valid. new value: ${axisValidator.newCoordinate}`
      );
      newCoordinates[axis] = axisValidator.newCoordinate;
    }
  });

  console.log('newCoordinates AFTER:', newCoordinates);
  console.groupEnd();
  console.groupEnd();

  css(spider, {
    left: `${newCoordinates.x}px`,
    top: `${newCoordinates.y}px`,
  });
});
