'use strict';

document.addEventListener('click', e => {
  const { clientX, clientY } = e;
  const {
    offsetLeft: wallLeft,
    offsetTop: wallTop,
    clientWidth: wallWidth,
    clientHeight: wallHeight,
    clientTop: border,
  } = document.querySelector('.wall');
  const {
    offsetHeight: spiderHeight,
    offsetWidth: spiderWidth,
    style: spiderStyle,
  } = document.querySelector('.spider');
  const spiderX = clientX - wallLeft - border - (spiderWidth / 2);
  const spiderY = clientY - wallTop - border - (spiderHeight / 2);
  const innerBorderLeft = wallLeft + border;
  const innerBorderTop = wallTop + border;
  const innerBorderRight = wallLeft + border + wallWidth;
  const innerBorderBottom = wallTop + border + wallHeight;

  if (
    clientX < wallLeft
    || clientY < wallTop
    || clientX > (innerBorderRight + border)
    || clientY > (innerBorderBottom + border)
  ) {
    return;
  };

  switch (true) {
    case clientX < innerBorderLeft:
      spiderStyle.left = '0px';
      break;

    case clientX > innerBorderRight:
      spiderStyle.left = `${wallWidth - (spiderWidth)}px`;
      break;

    default:
      spiderStyle.left = `${spiderX}px`;
  }

  switch (true) {
    case clientY < innerBorderTop:
      spiderStyle.top = '0px';
      break;

    case clientY > innerBorderBottom:
      spiderStyle.top = `${wallHeight - spiderHeight}px`;
      break;

    default:
      spiderStyle.top = `${spiderY}px`;
  }
});
