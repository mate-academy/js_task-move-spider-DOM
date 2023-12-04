'use strict';

const BORDER_WIDTH = 10;

document.querySelector('.wall').addEventListener('click', (e) => {
  const { clientX, clientY } = e;
  const {
    offsetLeft: wallLeft,
    offsetTop: wallTop,
    offsetWidth: wallWidth,
    offsetHeight: wallHeight,
  } = document.querySelector('.wall');
  const {
    offsetHeight: spiderHeight,
    offsetWidth: spiderWidth,
    style: spiderStyle,
  } = document.querySelector('.spider');

  const clickX = clientX - wallLeft;
  const clickY = clientY - wallTop;

  const spiderX = Math.min(
    Math.max(0, clickX - spiderWidth / 2 - BORDER_WIDTH),
    wallWidth - spiderWidth - BORDER_WIDTH * 2,
  );

  const spiderY = Math.min(
    Math.max(0, clickY - spiderHeight / 2 - BORDER_WIDTH),
    wallHeight - spiderHeight - BORDER_WIDTH * 2,
  );

  spiderStyle.left = `${spiderX}px`;
  spiderStyle.top = `${spiderY}px`;
});
