'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const { top: marginTop, left: marginLeft } = wall.getBoundingClientRect();

const spiderSize = {
  width: spider.offsetWidth,
  height: spider.offsetHeight,
};

const wallSize = {
  width: wall.offsetWidth,
  height: wall.offsetHeight,
};

const wallBorderSize = parseInt(getComputedStyle(wall).borderTopWidth, 10);

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  let correctCursorPositionY =
    e.clientY - marginTop - wallBorderSize - spiderSize.height / 2;
  let correctCursorPositionX =
    e.clientX - marginLeft - wallBorderSize - spiderSize.width / 2;

  correctCursorPositionY = Math.max(
    0,
    Math.min(
      correctCursorPositionY,
      wallSize.height - spiderSize.height - wallBorderSize * 2,
    ),
  );

  correctCursorPositionX = Math.max(
    0,
    Math.min(
      correctCursorPositionX,
      wallSize.width - spiderSize.width - wallBorderSize * 2,
    ),
  );

  spider.style.top = `${correctCursorPositionY}px`;
  spider.style.left = `${correctCursorPositionX}px`;
});
